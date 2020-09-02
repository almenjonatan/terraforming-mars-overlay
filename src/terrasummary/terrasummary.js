import io from "socket.io-client";
import * as React from "react";

const { Map, fromJS } = require('immutable');

class PlayerSummary extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.playerData.toJS())
        console.log(this.props.playerData instanceof Map)
        console.log(this.props.playerData.get("FinalScore"))
        console.log(this.props.playerData.get("CardsPlayed"))

        const cardsPlayed = this.props.playerData.get("CardsPlayed").reverse().map((value, key) => {
            return <div key={key}>{value}</div>
        })


        const localPlayerId = this.props.playerData.get("LocalPlayerId")

        let cardsInHand = undefined

        if (localPlayerId === this.props.playerData.get("PlayerId")) {
            cardsInHand = this.props.playerData.get("CardsInHand").map((value, key) => {
                return <div key={key}>{value}</div>
            })
        } else {
            cardsInHand = <h3>{this.props.playerData.get("CardsInHand").size}</h3>
        }

        return (
            <div style={{"width": "400px", "float": "left"}}>
                {<h3>{this.props.playerData.get("Color")}, Total Score: {this.props.playerData.get("FinalScore")}</h3>}
                <div>
                    <span>MegaCredit {this.props.playerData.getIn(["ResourceData", "MegaCredit", "Quantity"])}</span><br />
                    <span>steel {this.props.playerData.getIn(["ResourceData", "Steel", "Quantity"])}, </span><br />
                    <span>titanium {this.props.playerData.getIn(["ResourceData", "Titanium", "Quantity"])}, </span><br />
                    <span>plant {this.props.playerData.getIn(["ResourceData", "Plant", "Quantity"])}, </span><br />
                    <span>energy {this.props.playerData.getIn(["ResourceData", "Energy", "Quantity"])}, </span><br />
                    <span>heat {this.props.playerData.getIn(["ResourceData", "Heat", "Quantity"])}</span><br /><br />
                </div>
                <div>
                    <h3>Cards In hand!</h3>
                    {cardsInHand}
                </div>
                <div>
                    <h3>Cards Played</h3>
                    {cardsPlayed}
                </div>


            </div>
        )
    }
}

class TerraSummary extends React.Component {

    constructor(props) {
        super(props)

        if(props.data === undefined){
            this.state = {
                playerStates: Map()
            }
        } else {
            this.state = {
                playerStates: fromJS(props.data)
            }
        }
    }

    componentDidMount() {
        const socket = io("localhost:5000")

        socket.on("connect", () => {
            console.log("connected!")
        })

        socket.on("update", (data) => {
            this.setState({ playerStates: this.state.playerStates.merge(fromJS(data))})
        })
    }

    render() {
        const playerSummaries = this.state.playerStates.entrySeq().map(([key, value])=> {
            return <PlayerSummary key={key} playerData={value} />
        })

        return(
            <div>
                {playerSummaries}
            </div>
        )
    }
}

export default TerraSummary;
