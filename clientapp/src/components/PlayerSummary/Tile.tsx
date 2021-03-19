import React from "react"
import City from "../../assets/tiles/UI_ic_rules_TileCity.png"
import Ocean from "../../assets/tiles/UI_ic_rules_TileOcean.png"
import Greenery from "../../assets/tiles/UI_ic_rules_TileGreenery.png"
import CommercialDistrict from "../../assets/tiles/BackCommercial.png"
import Capital from "../../assets/tiles/BackCapital.png"
import EcologicalZone from "../../assets/tiles/BackEcological.png"
import MiningArea from "../../assets/tiles/BackMining.png"
import RestrictedArea from "../../assets/tiles/BackRestricted.png"
import NuclearZone from "../../assets/tiles/BackNuclear.png"
import NaturalPreserve from "../../assets/tiles/BackNatural.png"
import IndustrialCenter from "../../assets/tiles/BackIndustrial.png"
import MoholeArea from "../../assets/tiles/BackMoholes.png"
import LavaFlows from "../../assets/tiles/BackLava.png"
import { IOccupiedTile } from "../../swagger"

const tileImages = {
    Greenery,
    City,
    Ocean,
    Flooding: Ocean,
    CommercialDistrict,
    Capital,
    EcologicalZone,
    MiningArea,
    RestrictedArea,
    NuclearZone,
    NaturalPreserve,
    IndustrialCenter,
    MoholeArea,
    LavaFlows,
    Ganymede: City
} as Record<string, string>

interface ITileMapping {
    rowStart: number
    colStart: number
}
function GenerateTileIdMapping(): Record<string, ITileMapping> {
    const rows = [5, 6, 7, 8, 9, 8, 7, 6, 5]
    const colStart = [10, 9, 8, 7, 6, 7, 8, 9, 10]
    const rowStart = [7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]

    let tileMapping: Record<number, ITileMapping> = {}

    let count = 0;

    rows.forEach((n_cols, ix) => {

        const columnIndexes = Array.from({ length: n_cols }, (x, i) => i)

        columnIndexes.forEach(e => {
            const c = colStart[ix] + 2 * e;
            const r = rowStart[ix];
            tileMapping[count] = { rowStart: r, colStart: c }
            count++
        })
    })
    return tileMapping
}

const tileMapping = GenerateTileIdMapping();

const Tile: React.FC<IOccupiedTile> = ({ id, owner, ownerColor, type }) => {

    if (id > 61) {
        return <div></div>
    }

    const hex = {
        gridRow: `${tileMapping[id - 1].rowStart} / ${tileMapping[id - 1].rowStart + 3}`,
        gridColumn: `${tileMapping[id - 1].colStart} / ${tileMapping[id - 1].colStart + 2}`,
        clipPath: "polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%)",
    } as React.CSSProperties

    const bg = {
        clipPath: "polygon(5% 25%, 50% 5%, 95% 25%, 95% 75%, 50% 95%, 5% 75%)",
        background: `url(${tileImages[type]})`,
        backgroundPosition: "center",
        backgroundSize: "4em 4em"
    }

    if (type === "NA") {
        return (
            <div style={{...hex }}>
                <div className="w-full h-full bg-yellow-100 opacity-40"></div>
            </div>
        )
    }

    return (
        <div style={{...hex, backgroundColor: `${ownerColor}` }}>
            <div style={{...bg}} className="w-full h-full">
            </div>
        </div>

    )
}

export default Tile