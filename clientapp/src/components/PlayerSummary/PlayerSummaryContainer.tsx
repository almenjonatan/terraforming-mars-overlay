import React, { ReactElement } from "react"
import Grid from "./Grid"
import GlobalParams from "./GlobalParams"
import PlayerCard from "./PlayerCard"
import "./style.css"
import { IPlayerMetaData, ITurnLog } from "../../swagger"

interface PlayerSummaryContainerProps {
    metadata: Record<string, IPlayerMetaData>
    turnlog: ITurnLog,
    tiles: ReactElement[]
}

export const PlayerSummaryContainer: React.FC<PlayerSummaryContainerProps> = ({ metadata, turnlog, tiles }) => {

    if (turnlog === undefined || Object.keys(turnlog).length === 0 || metadata === undefined || Object.keys(metadata).length === 0) {
        return <div>Waiting for player to make an action!</div>
    }

    return (
        <div className="container mx-auto">
            <div className="main-grid-container">
                <div className="space-y-1 self-center">
                    <PlayerCard metadata={metadata} turnlog={turnlog} />
                </div>
                <div>
                    <Grid>
                        {tiles}
                        <div style={{ gridColumn: "25 / 27", gridRow: "5 / 8" }} className="text-5xl font-semibold text-gray-700 text-center">
                            {turnlog.generation}
                        </div>
                        <GlobalParams oceanTileCounter={turnlog.oceanTileCounter} temperatureLevel={turnlog.temperatureLevel} oxygenLevel={turnlog.oxygenLevel} />
                    </Grid>
                </div>
            </div>
        </div>
    )
}