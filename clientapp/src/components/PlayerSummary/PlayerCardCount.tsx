import CardBack from "../../assets/CardBack.png";
import React from "react"
import { IPlayerLog } from "../../swagger";

const cardBack = <img src={CardBack} className="w-6 h-8 object-cover shadow-md mx-auto" alt=""/>;

const PlayerCardCount: React.FC<IPlayerLog> = (playerLog) => {

	const cardCount = (typeof playerLog === "undefined") ? 0 : playerLog.cardsInHand.length;
	
	return <div style={{backgroundImage: `url(${CardBack})`}} className="w-12 h-12 bg-contain bg-center bg-no-repeat flex flex-row justify-center items-center" >
		<span className="font-semibold text-white text-lg">{cardCount}</span>
	</div>;
}

export default PlayerCardCount;