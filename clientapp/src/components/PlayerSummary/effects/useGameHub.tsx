import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState, ReactElement, useEffect } from "react";
import { useParams } from "react-router";
import { IPlayerMetaData, ITurnLog } from "../../../swagger";
import { generateTiles } from "../utils";


export const useGameStateHub = () => {

    const [playerMetaData, setPlayerMetaData] = useState<Record<string, IPlayerMetaData>>({});
    const [turnlog, setTurnLog] = useState<ITurnLog>();
    const { playerId } = useParams<Record<string, string>>();
    const [tiles, setTiles] = useState<ReactElement[]>([])

    useEffect(() => {
        async function connectToHub() {

            const hubConnection = new HubConnectionBuilder()
                .withUrl("/gamehub")
                .build();

            hubConnection.on("newturn", (turnlog: ITurnLog) => {
                setTurnLog(turnlog);
                setTiles(generateTiles(tiles, turnlog.occupiedTiles));
            });

            hubConnection.on("metadata", (metadata: Record<string, IPlayerMetaData>) => {
                setPlayerMetaData(metadata);
            });

            await hubConnection.start();
            await hubConnection.send("register", Number(playerId))
        }

        connectToHub();

    }, [])

    return { turnlog, playerMetaData, tiles }
}