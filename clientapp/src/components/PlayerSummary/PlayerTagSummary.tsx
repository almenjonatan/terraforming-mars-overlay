import React from "react";
import Science from "../../assets/tags/UI_ic_com_sml_TagsScience.png";
import Animal from "../../assets/tags/UI_ic_com_sml_TagsAnimal.png";
import Building from "../../assets/tags/UI_ic_com_sml_TagsBuilding.png";
import City from "../../assets/tags/UI_ic_com_sml_TagsCity.png";
import Earth from "../../assets/tags/UI_ic_com_sml_TagsEarth.png";
import Power from "../../assets/tags/UI_ic_com_sml_TagsEnergy.png";
import Event from "../../assets/tags/UI_ic_com_sml_TagsEvent.png";
import Jovian from "../../assets/tags/UI_ic_com_sml_TagsJovian.png";
import Microbe from "../../assets/tags/UI_ic_com_sml_TagsMicrobe.png";
import Plant from "../../assets/tags/UI_ic_com_sml_TagsPlant.png";
import Space from "../../assets/tags/UI_ic_com_sml_TagsSpace.png";

const questionMark = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="-20 -18 220 220" version="1.0">
    <path d="M197.1217 99.9983a97.123 97.123 0 11-194.246 0 97.123 97.123 0 11194.246 0z" fill="#fff" />
    <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 12.812c48.13 0 87.19 39.058 87.19 87.188s-39.06 87.19-87.19 87.19S12.812 148.13 12.812 100 51.87 12.812 100 12.812zm1.47 21.25c-5.45.03-10.653.737-15.282 2.063-4.699 1.346-9.126 3.484-12.876 6.219-3.238 2.362-6.333 5.391-8.687 8.531-4.159 5.549-6.461 11.651-7.063 18.687-.04.468-.07.868-.062.876.016.016 21.702 2.687 21.812 2.687.053 0 .113-.234.282-.937 1.941-8.085 5.486-13.521 10.968-16.813 4.32-2.594 9.808-3.612 15.778-2.969 2.74.295 5.21.96 7.38 2 2.71 1.301 5.18 3.361 6.94 5.813 1.54 2.156 2.46 4.584 2.75 7.312.08.759.05 2.48-.03 3.219-.23 1.826-.7 3.378-1.5 4.969-.81 1.597-1.48 2.514-2.76 3.812-2.03 2.077-5.18 4.829-10.78 9.407-3.6 2.944-6.04 5.156-8.12 7.343-4.943 5.179-7.191 9.069-8.564 14.719-.905 3.72-1.256 7.55-1.156 13.19.025 1.4.062 2.73.062 2.97v.43h21.598l.03-2.4c.03-3.27.21-5.37.56-7.41.57-3.27 1.43-5 3.94-7.81 1.6-1.8 3.7-3.76 6.93-6.47 4.77-3.991 8.11-6.99 11.26-10.125 4.91-4.907 7.46-8.26 9.28-12.187 1.43-3.092 2.22-6.166 2.46-9.532.06-.816.07-3.03 0-3.968-.45-7.043-3.1-13.253-8.15-19.032-.8-.909-2.78-2.887-3.72-3.718-4.96-4.394-10.69-7.353-17.56-9.094-4.19-1.062-8.23-1.6-13.35-1.75-.78-.023-1.59-.036-2.37-.032zm-10.908 103.6v22h21.998v-22H90.562z" />
</svg>

const images = {
    Science,
    Animal,
    Building,
    City,
    Earth,
    Power,
    Event,
    Jovian,
    Microbe,
    Plant,
    Space,
} as Record<string, string>


const PlayerTagSummary: React.FC<Record<string, number>> = (tags) => {
    return <div className="flex flex-row space-x-0.5 text-sm">
        {
            Object.keys(tags).map((k, i) => {

                if(k === "None" || tags[k] < 1){
                    return;
                }
                return (
                    <div key={i} className="flex flex-col text-center">
                        {k === "Wild" ? <div>{questionMark}</div> : <img className="inline-block w-5 h-5" src={images[k]} alt={k} />}
                        <span>{tags[k]}</span>
                    </div>
                )
            })
        }
    </div>
}

export default PlayerTagSummary;