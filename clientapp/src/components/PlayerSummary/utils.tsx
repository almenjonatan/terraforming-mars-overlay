import produce from "immer";
import { ReactElement } from "react";
import { IOccupiedTile, IPlayerMetaData } from "../../swagger";
import Tile from "./Tile";

export const  generateTiles = (prevState: ReactElement[], newTiles: IOccupiedTile[]): ReactElement[] => {
    let initialState: ReactElement[] = []

    if(prevState.length === 0){
        initialState = Array.from({length: 63}, (x, i) => <Tile key={i+1}{...{id: i+1, type:"NA", owner: "", ownerColor: ""}} />)
    }

    const newState = produce(prevState.length === 0 ? initialState : prevState, draft =>{
        newTiles.forEach((e, i) => {
            draft[e.id-1] = <Tile key={e.id} {...e} />
        });
    });

    return newState
}