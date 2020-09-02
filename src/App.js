import React from 'react';
import './App.css';
import TerraSummary from "./terrasummary/terrasummary";

const data = {
  "1": {
    "FinalScore": 59,
    "TerraformingRating": 32,
    "ResourceData": {
      "MegaCredit": {
        "Quantity": 53,
        "Production": 7
      },
      "Steel": {
        "Quantity": 20,
        "Production": 5
      },
      "Titanium": {
        "Quantity": 31,
        "Production": 6
      },
      "Plant": {
        "Quantity": 4,
        "Production": 9
      },
      "Energy": {
        "Quantity": 0,
        "Production": 0
      },
      "Heat": {
        "Quantity": 3,
        "Production": 0
      }
    },
    "CardsInHand": [
      "Ore Processor",
      "Livestock",
      "Restricted Area",
      "Immigration Shuttles",
      "Martian Rails",
      "Magnetic Field Dome"
    ],
    "CardsPlayed": [
      "Titanium Mine",
      "Power Plant",
      "Release of Inert Gases",
      "Wave Power",
      "Great Dam",
      "Vesta Shipyard",
      "Adapted Lichen",
      "Space Elevator",
      "Strip Mine",
      "Virus",
      "Grass",
      "Nitrophilic Moss",
      "Greenhouses",
      "Robotic Workforce",
      "Heather",
      "Dust Seals",
      "Insects",
      "Rover Construction",
      "Rad-Suits",
      "Tundra Farming",
      "Mine",
      "Phobos Space Haven",
      "Research",
      "Advanced Alloys",
      "Energy Tapping",
      "Hackers"
    ],
    "PlayerId": 1,
    "IsLocalPlayer": true,
    "Color": "Green"
  },
  "2": {
    "FinalScore": 89,
    "TerraformingRating": 43,
    "ResourceData": {
      "MegaCredit": {
        "Quantity": 6,
        "Production": 7
      },
      "Steel": {
        "Quantity": 0,
        "Production": 0
      },
      "Titanium": {
        "Quantity": 2,
        "Production": 0
      },
      "Plant": {
        "Quantity": 0,
        "Production": 6
      },
      "Energy": {
        "Quantity": 2,
        "Production": 1
      },
      "Heat": {
        "Quantity": 7,
        "Production": 5
      }
    },
    "CardsInHand": [
      "Anti-Gravity Technology",
      "Building Industries",
      "Fish",
      "Mass Converter",
      "Gene Repair"
    ],
    "CardsPlayed": [
      "Arctic Algae",
      "Peroxide Power",
      "Cupola City",
      "Carbonate Processing",
      "Nuclear Power",
      "Soil Factory",
      "Capital",
      "Optimal Aerobraking",
      "Biomass Combustors",
      "Imported Hydrogen",
      "Herbivores",
      "Eos Chasma National Park",
      "Algae",
      "Space Station",
      "Trees",
      "Media Group"
    ],
    "PlayerId": 2,
    "IsLocalPlayer": false,
    "Color": "Grey"
  }
}

function App() {

    return (
        <div className="App">
          <TerraSummary data={data} />
        </div>
    );
}

export default App;
