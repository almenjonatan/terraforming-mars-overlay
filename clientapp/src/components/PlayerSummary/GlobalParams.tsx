import React from "react";
import Water from "../../assets/global/UI_ic_com_med_TileWater.png";
import Temp from "../../assets/global/UI_ic_rules_Temp.png";
import Oxygen from "../../assets/global/UI_ic_rules_Oxygen.png";

interface GlobalParamsProps {
    temperatureLevel: number,
    oxygenLevel: number,
    oceanTileCounter: number,
}

const GlobalParams: React.FC<GlobalParamsProps> = ({ temperatureLevel, oxygenLevel, oceanTileCounter }) => {
    return (
        <div key={"params"} style={{ gridColumn: "25 / 29", gridRow: "14 / 19" }}>
            <div className="grid grid-cols-2 items-center gap-1">
                <img src={Temp} className="w-5 h-8 justify-self-center"></img><span className="font-semibold text-red-500">{temperatureLevel}</span>
                <img src={Oxygen} className="w-8 h-8 justify-self-center"></img><span className="font-semibold text-green-500">{oxygenLevel}</span>
                <img src={Water} className="w-8 h-8 justify-self-center"></img><span className="font-semibold text-blue-500">{oceanTileCounter}</span>
            </div>
        </div>
    )
}


export default GlobalParams