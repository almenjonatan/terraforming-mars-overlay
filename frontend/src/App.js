import React from 'react';
import './App.css';
import TerraSummary from "./terrasummary/terrasummary";
import {mockData} from "./mockdata";

// Use <TerraSummary data={mockData} /> to use mock data

function App() {

    return (
        <div className="App">
          <TerraSummary />
        </div>
    );
}

export default App;
