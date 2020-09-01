import React from 'react';
import './App.css';
import TerraSummary from "./terrasummary/terrasummary";

const data = {
   "1":{
      "localPlayerId":1,
      "playerId":1,
      "megacredit":24,
      "steel":9,
      "titanium":0,
      "plant":3,
      "energy":2,
      "heat":2,
      "cardsPlayed":[
         "Technology Demonstration",
         "Restricted Area",
         "Mars University",
         "Callisto Penal Mines",
         "Medical Lab",
         "Hackers",
         "Business Contacts",
         "Titanium Mine",
         "AI Central",
         "Moss",
         "Robotic Workforce",
         "Media Group",
         "Hired Raiders",
         "Industrial Microbes",
         "Archaebacteria",
         "Lichen",
         "Power Plant",
         "Building Industries",
         "Mine",
         "Kelp Farming",
         "Geothermal Power",
         "Artificial Photosynthesis",
         "Protected Valley",
         "Carbonate Processing",
         "Sponsors",
         "Great Escarpment Consortium",
         "Lightning Harvest",
         "Asteroid Mining"
      ],
      "cardsInHand":[
         "Anti-Gravity Technology",
         "Big Asteroid",
         "Extreme-Cold Fungus",
         "Fish",
         "Dust Seals",
         "Olympus Conference",
         "Biomass Combustors",
         "Fueled Generators",
         "Investment Loan",
         "Quantum Extractor",
         "Mangrove"
      ],
      "terraformingRating":24,
      "score":40
   },
   "2":{
      "localPlayerId":1,
      "playerId":2,
      "megacredit":0,
      "steel":5,
      "titanium":7,
      "plant":2,
      "energy":0,
      "heat":2,
      "cardsPlayed":[
         "Rad-Chem Factory",
         "Arctic Algae",
         "Invention Contest",
         "Aquifer Pumping",
         "Water Import From Europa",
         "Nitrophilic Moss",
         "Industrial Center",
         "Optimal Aerobraking",
         "Fuel Factory",
         "Space Station",
         "Io Mining Industries",
         "Mining Area",
         "Convoy From Europa",
         "Trans-Neptune Probe",
         "Asteroid Mining Consortium",
         "Birds"
      ],
      "cardsInHand":[
         "Ice cap Melting",
         "Corporate Stronghold",
         "Farming",
         "Shuttles",
         "Ice Asteroid",
         "Tropical Resort"
      ],
      "terraformingRating":45,
      "score":72
   },
   "3":{
      "localPlayerId":1,
      "playerId":3,
      "megacredit":5,
      "steel":0,
      "titanium":0,
      "plant":4,
      "energy":0,
      "heat":5,
      "cardsPlayed":[
         "Rover Construction",
         "Inventors' Guild",
         "Micro-Mills",
         "Nuclear Zone",
         "Research Outpost",
         "Algae",
         "Viral Enhancers",
         "Earth Catapult",
         "Livestock",
         "CEO's Favourite Project",
         "Earth Office",
         "Mineral Deposit",
         "Methane From Titan",
         "Satellites",
         "Deep Well Heating",
         "Tardigrades",
         "Bushes",
         "Comet"
      ],
      "cardsInHand":[
         "Equatorial Magnetizer",
         "Ironworks",
         "Mass Converter",
         "Magnetic Field Dome",
         "Capital",
         "Magnetic Field Generators",
         "Decomposers",
         "Electro Catapult",
         "Security Fleet",
         "Strip Mine",
         "Subterranean Reservoir",
         "Trees"
      ],
      "terraformingRating":32,
      "score":52
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
