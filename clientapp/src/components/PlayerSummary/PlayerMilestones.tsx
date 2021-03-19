import React from "react";

import Builder from "../../assets/milestones/UI_ic_mls_builder.png";
import Gardener from "../../assets/milestones/UI_ic_mls_gardener.png";
import Mayor from "../../assets/milestones/UI_ic_mls_mayor.png";
import Planner from "../../assets/milestones/UI_ic_mls_planner.png";
import Terraformer from "../../assets/milestones/UI_ic_mls_terraformer.png";

const milestoneUrls = {
    Builder,
    Gardener,
    Mayor, 
    Planner,
    Terraformer
} as Record<string, string>;

const PlayerMilestones: React.FC<Record<string, number>> = (milestones) => {
    const milestonesItems = Object.keys(milestones).filter(k => milestones[k] > 0).map(k => (
        <div className="flex flex-row text-center items-center" key={k}>
            <img src={milestoneUrls[k]} alt={k} className="w-10 h-7" />
        </div>
    ));

    return (
        <div className="flex flex-row">
            {milestonesItems}
        </div>
    )
}

export default PlayerMilestones;