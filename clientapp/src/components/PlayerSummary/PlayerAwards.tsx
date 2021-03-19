import React from "react";

import Landlord from "../../assets/awards/UI_ic_awd_landlord.png";
import Banker from "../../assets/awards/UI_ic_awd_banker.png";
import Miner from "../../assets/awards/UI_ic_awd_miner.png";
import Scientist from "../../assets/awards/UI_ic_awd_scientist.png";
import Thermalist from "../../assets/awards/UI_ic_awd_thermalist.png";

const awardImageUrls = {
    Landlord,
    Banker,
    Miner,
    Scientist,
    Thermalist
} as Record<string, string>;

const PlayerAwards: React.FC<Record<string, number>> = (awards) => {
    const awardItems = Object.keys(awards).filter(k => awards[k] > 0).map((k, i) => (
        <div key={i} className="flex flex-row text-center items-center">
            <img src={awardImageUrls[k]} alt={k} className="w-9 h-6" />
            <span className="text-sm text-gray-700">{awards[k]}</span>
        </div>
    ));

    if(Object.keys(awards).filter(k => awards[k] !== 0).length === 0){
        return <div></div>
    }

    return (
        <div className="flex flex-row space-x-2 pl-2 space-x-2">
            {awardItems}
        </div>
    )
}

export default PlayerAwards;