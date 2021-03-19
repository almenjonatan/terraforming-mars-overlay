import React from "react"

import Heat from "../../assets/resourcetags/UI_ic_com_med_ResHeat.png";
import Energy from "../../assets/resourcetags/UI_ic_com_med_ResEnergy.png";
import Titanium from "../../assets/resourcetags/UI_ic_com_med_ResTitan.png";
import MegaCredit from "../../assets/resourcetags/UI_img_rulesMegaCredits.png";
import Plant from "../../assets/resourcetags/UI_ic_com_med_ResPlant.png";
import Steel from "../../assets/resourcetags/UI_ic_com_med_ResSteel.png";
import prodBar from "../../assets/ProdBarMid.png";
import { url } from "inspector";
import { IResourceItem } from "../../swagger";

const resources = {
    Heat,
    Energy,
    Titanium,
    MegaCredit,
    Plant,
    Steel
} as Record<string, string>;

const PlayerResources: React.FC<Record<string, IResourceItem>> = (resourceItems) => {

    const records = Object.keys(resourceItems).map((k, i) => {
        return (
            <div key={i} className="flex flex-col flex-shrink-0">
                <div style={{backgroundImage: `url(${prodBar})`, backgroundPosition: "center"}}className="flex flex-row items-center justify-center align-middle content-center">
                    <div className="text-white text-xs font-semibold">
                        {resourceItems[k].production}
                    </div>
                </div>
                <div className="flex flex-row space-x-1">
                    <div>
                        <img src={resources[k]} className="w-6 h-6 object-cover shadow-md mx-auto" alt="" />
                    </div>
                    <div>
                        <span className="text-gray-700 font-semibold">{resourceItems[k].quantity}</span>
                    </div>
                </div>



            </div>
        )
    });

    return <div className="flex flex-row space-x-2">
        {records}
    </div>
}

export default PlayerResources;