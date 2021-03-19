import PlayerDataContainer from "./components/PlayerSummary/PlayerDataContainer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from "react";


function App() {
    return <Router>
        <Switch>
        <Route exact path="/player/:playerId">
            <PlayerDataContainer />
        </Route>
        </Switch>
    </Router>
        
}

export default App;