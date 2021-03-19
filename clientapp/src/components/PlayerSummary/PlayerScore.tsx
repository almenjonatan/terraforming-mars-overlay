import React from "react"
import { IScore } from "../../swagger"

const sigma = <svg id="Capa_1" enableBackground="new 0 0 235.067 235.067" viewBox="0 0 235.067 235.067" className="w-5 h-5 inline-block" xmlns="http://www.w3.org/2000/svg"><path d="m227.233 235.067h-219.396c-1.532 0-2.923-.893-3.561-2.284-.639-1.391-.407-3.028.596-4.192l95.735-111.058-95.74-111.057c-.999-1.163-1.234-2.801-.595-4.192s2.033-2.284 3.565-2.284h219.396c2.163 0 3.918 1.751 3.918 3.918v58.767c0 2.167-1.755 3.918-3.918 3.918h-27.425c-2.163 0-3.918-1.751-3.918-3.918v-27.425h-109.266l65.286 79.794c1.179 1.442 1.179 3.514 0 4.96l-65.286 79.794h109.267v-27.425c0-2.167 1.755-3.918 3.918-3.918h27.425c2.163 0 3.918 1.751 3.918 3.918v58.767c-.001 2.166-1.752 3.917-3.919 3.917z" /></svg>

const PlayerScore: React.FC<IScore> = (score) => {

    if (Object.keys(score).length === 0) {
        return <span>Score not yet available!</span>
    }

    return <div>{sigma} <span className="font-semibold text-gray-600">{score.finalScore}</span></div>
}

export default PlayerScore;