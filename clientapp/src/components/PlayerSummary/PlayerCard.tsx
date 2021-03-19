import React from "react";
import { TurnLog, PlayerMetaData, IPlayerMetaData, ITurnLog } from "../../swagger";
import PlayerAwards from "./PlayerAwards";
import PlayerCardCount from "./PlayerCardCount";
import PlayerInfo from "./PlayerInfo";
import PlayerMilestones from "./PlayerMilestones";
import PlayerResources from "./PlayerResources";
import PlayerScore from "./PlayerScore";
import PlayerTagSummary from "./PlayerTagSummary";


export type PlayerContainerProps = {
    turnlog: ITurnLog
    metadata: Record<string, IPlayerMetaData>
}

const container = {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    gap: "1em"

} as React.CSSProperties

const PlayerCard: React.FC<PlayerContainerProps> = ({ turnlog, metadata }) => {

    const summary = Object.keys(turnlog.playerInfo).map((k, i) => {
        const props = {
            resourceItems: turnlog.playerInfo[k].resourceData,
            cardCount: turnlog.playerInfo[k],
            score: turnlog.playerInfo[k].score,
            tags: turnlog.playerInfo[k].tags,
            metadata: metadata[k],
            awards: turnlog.playerInfo[k].score.awardScore,
            milestones: turnlog.playerInfo[k].score.milestoneScore,
        }
        return (
            <div key={i} style={container} className="shadow-md p-3 rounded-sm bg-gray-50 max-w-screen-md">
                <div className="col-span-full">
                    <PlayerInfo metadata={props.metadata} />
                </div>
                <div>
                    <PlayerResources {...props.resourceItems} />
                </div>
                <PlayerMilestones {...props.milestones} />
                <PlayerTagSummary {...props.tags} />
                <PlayerAwards {...props.awards} />
                <div className="self-center">
                    <PlayerScore {...props.score} />
                </div>
                <div className="self-center">
                    <PlayerCardCount {...props.cardCount} />
                </div>
                
            </div>
        )
    })


    return <div className="space-y-1">{summary}</div>
}

export default PlayerCard;