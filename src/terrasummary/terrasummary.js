import io from "socket.io-client";
import * as React from "react";

const { Map, fromJS } = require('immutable');

class PlayerSummary extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const cardsPlayed = this.props.playerData.get("cardsPlayed").reverse().map((value, key) => {
            return <div key={key}>{value}</div>
        })


        const localPlayerId = this.props.playerData.get("localPlayerId")

        let cardsInHand = undefined

        if (localPlayerId === this.props.playerData.get("playerId")) {
            cardsInHand = this.props.playerData.get("cardsInHand").map((value, key) => {
                return <div key={key}>{value}</div>
            })
        } else {
            cardsInHand = <h3>{this.props.playerData.get("cardsInHand").size}</h3>
        }

        return (
            <div style={{"width": "400px", "float": "left"}}>
                {<h3>Player {this.props.playerData.get("playerId")}, Total Score: {this.props.playerData.get("score")}</h3>}
                <div>
                    <span>MegaCredit {this.props.playerData.get("megacredit")}</span><br />
                    <span>steel {this.props.playerData.get("steel")}, </span><br />
                    <span>titanium {this.props.playerData.get("titanium")}, </span><br />
                    <span>plant {this.props.playerData.get("plant")}, </span><br />
                    <span>energy {this.props.playerData.get("energy")}, </span><br />
                    <span>heat {this.props.playerData.get("heat")}</span><br /><br />
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
        this.state = {
            playerState: Map()
        }
    }



    componentDidMount() {
        const socket = io("localhost:5000")

        socket.on("connect", () => {
            console.log("connected!")
        })

        socket.on("update", (data) => {
            this.setState({ playerState: this.state.playerState.merge(fromJS(data))})
        })
    }

    render() {
        console.log(this.state.playerState.toJS())
        const playerSummaries = this.state.playerState.entrySeq().map(([key, value])=> {
            console.log(key, value)
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
