import { useGameStateHub } from "./effects/useGameHub";
import { PlayerSummaryContainer } from "./PlayerSummaryContainer";

const PlayerDataContainer: React.FC = () => {
    const { turnlog, playerMetaData, tiles } = useGameStateHub()

    if (turnlog === undefined || Object.keys(playerMetaData).length === 0) {
        return <div>waiting for player ...</div>
    }

    return (
        <div>
            <PlayerSummaryContainer metadata={playerMetaData} turnlog={turnlog} tiles={tiles} />
        </div>
    )
}

export default PlayerDataContainer;

