import Beginner from "../../assets/corps/beginner.png";
import CheungShingMars from "../../assets/corps/cheungShingMars.png";
import Credicor from "../../assets/corps/credicor.png";
import Ecoline  from "../../assets/corps/ecoline.png";
import Helion  from "../../assets/corps/helion.png";
import InterplanetaryCinematics  from "../../assets/corps/interplanetary.png";
import Inventrix from "../../assets/corps/inventrix.png";
import MiningGuild from "../../assets/corps/miningGuild.png";
import PhoboLob from "../../assets/corps/phoboLog.png";
import PointLuna from "../../assets/corps/pointLuna.png";
import RobinsonIndustries from "../../assets/corps/robinson.png";
import SaturnSystems from "../../assets/corps/saturnSystems.png";
import Teractor from "../../assets/corps/teractor.png";
import TharsusRepublic from "../../assets/corps/tharsisRepublic.png";
import Thorgate from "../../assets/corps/thorgate.png";
import UNMI from "../../assets/corps/UNMI.png";
import ValleyTrust from "../../assets/corps/valleyTrust.png";
import Vitor from "../../assets/corps/vitor.png";
import { IPlayerMetaData } from "../../swagger";

const corporations: Record<string, string> = {
    Beginner,
    CheungShingMars,
    Credicor,
    Ecoline,
    Helion,
    InterplanetaryCinematics,
    Inventrix,
    MiningGuild,
    PhoboLob,
    PointLuna,
    RobinsonIndustries,
    SaturnSystems,
    Teractor,
    TharsusRepublic,
    Thorgate,
    UNMI,
    ValleyTrust,
    Vitor,
}


const getColor = (color: string): string => {
    
    switch(color){
        case "Green": return "green-700"
        case "Purple": return "purple-700"
        case "Red": return "red-700"
        case "Blue": return "blue-700"
        case "Yellow": return "yellow-700"
    }

    return "";
}

export interface PlayerInfoProps {
    metadata: IPlayerMetaData
    children?: React.ReactNode
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({children, metadata}) => {

    if(!metadata || Object.keys(metadata).length === 0) {
        return <div>Currently no information to display!</div>
    }

    return (
        <div className={`flex flex-row border-b border-${getColor(metadata.color)}`}>
            <div className="text-md text-gray-700 font-semibold tracking-wider flex-grow space flex flex-row items-center space-x-2">
                <img src={metadata.avatarURI} className="rounded-full h-7 w-7" />
                <span className={`text-${getColor(metadata.color)}`}>{metadata.name}</span>
                <span className="text-sm text-gray-400">({Math.round(metadata.elo)})</span>
            </div>
            <div className="flex-grow">
                {children}
            </div>
            <img src={corporations[metadata.corporation]} className="w-9 h-9 rounded-md p-1" />
        </div>
    )
}

export default PlayerInfo;