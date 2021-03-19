import CardBack from "../../assets/CardBack.png";
import RightArrow from "../../assets/arrow.png";

import React from "react";

export interface PlayerPassToProps {
    name: string
    color: string
}

const PlayerPassTo: React.FC<PlayerPassToProps> = ({name, color}) => {
    return (
        <div className="flex flex-row space-x-2">
            <img src={CardBack} alt="" className="w-5 h-7" />
            <div className="flex flex-row items-center align-middle">
                <img src={RightArrow} alt="" className="w-3 h-5" />
                <div>{name}</div>
            </div>
        </div>
    )
}

export default PlayerPassTo;