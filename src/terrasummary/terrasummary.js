import io from "socket.io-client";
import * as React from "react";
import DataTable from 'react-data-table-component';
import {Seq} from "immutable";

const { Map, fromJS } = require('immutable');

  const mockData = {
   "1":{
      "FinalScore":0,
      "TerraformingRating":21,
      "ResourceData":{
         "MegaCredit":{
            "Quantity":39,
            "Production":0
         },
         "Steel":{
            "Quantity":0,
            "Production":0
         },
         "Titanium":{
            "Quantity":0,
            "Production":0
         },
         "Plant":{
            "Quantity":0,
            "Production":0
         },
         "Energy":{
            "Quantity":0,
            "Production":0
         },
         "Heat":{
            "Quantity":0,
            "Production":3
         }
      },
      "CardsInHand":[
         "Colonizer Training Camp",
         "Zeppelins",
         "Ants",
         "Martian Rails",
         "Asteroid Mining Consortium",
         "Shuttles",
         "Imported Nitrogen",
         "Trans-Neptune Probe",
         "Nitrite Reducing Bacteria",
         "Energy Tapping",
         "Capital",
         "Mangrove",
         "Urbanized Area",
         "Ice cap Melting",
         "Industrial Microbes",
         "Building Industries"
      ],
      "CardsPlayed":[
         "Subterranean Reservoir"
      ],
      "PlayerId":1,
      "IsLocalPlayer":true,
      "Color":"Green",
      "Score":{
         "FinalScore":43,
         "TerraFormingRating":21,
         "VictoryPoints":0,
         "GreeneryScore":0,
         "CityScore":15,
         "MilestoneScore":[
            {
               "Name":"Planner",
               "Score":5
            }
         ],
         "AwardScore":[
            {
               "Name":"Landlord",
               "Score":2
            },
            {
               "Name":"Banker",
               "Score":0
            },
            {
               "Name":"Scientist",
               "Score":0
            },
            {
               "Name":"Thermalist",
               "Score":0
            },
            {
               "Name":"Miner",
               "Score":0
            }
         ]
      }
   },
   "2":{
      "FinalScore":0,
      "TerraformingRating":26,
      "ResourceData":{
         "MegaCredit":{
            "Quantity":9,
            "Production":0
         },
         "Steel":{
            "Quantity":0,
            "Production":0
         },
         "Titanium":{
            "Quantity":2,
            "Production":0
         },
         "Plant":{
            "Quantity":1,
            "Production":1
         },
         "Energy":{
            "Quantity":0,
            "Production":1
         },
         "Heat":{
            "Quantity":4,
            "Production":2
         }
      },
      "CardsInHand":[
         "Nitrophilic Moss",
         "Fish",
         "Physics Complex"
      ],
      "CardsPlayed":[
         "Technology Demonstration",
         "Dust Seals",
         "Geothermal Power",
         "Development Center",
         "Deimos Down",
         "Tardigrades",
         "Magnetic Field Dome",
         "Power Plant"
      ],
      "PlayerId":2,
      "IsLocalPlayer":false,
      "Color":"Grey",
      "Score":{
         "FinalScore":43,
         "TerraFormingRating":26,
         "VictoryPoints":1,
         "GreeneryScore":10,
         "CityScore":0,
         "MilestoneScore":[

         ],
         "AwardScore":[
            {
               "Name":"Landlord",
               "Score":2
            },
            {
               "Name":"Banker",
               "Score":0
            },
            {
               "Name":"Scientist",
               "Score":2
            },
            {
               "Name":"Thermalist",
               "Score":2
            },
            {
               "Name":"Miner",
               "Score":0
            }
         ]
      }
   },
   "3":{
      "FinalScore":0,
      "TerraformingRating":21,
      "ResourceData":{
         "MegaCredit":{
            "Quantity":10,
            "Production":1
         },
         "Steel":{
            "Quantity":0,
            "Production":0
         },
         "Titanium":{
            "Quantity":0,
            "Production":0
         },
         "Plant":{
            "Quantity":2,
            "Production":1
         },
         "Energy":{
            "Quantity":0,
            "Production":3
         },
         "Heat":{
            "Quantity":0,
            "Production":0
         }
      },
      "CardsInHand":[
         "Commercial District",
         "Aerobraked Ammonia Asteroid"
      ],
      "CardsPlayed":[
         "Invention Contest",
         "Lagrange Observatory",
         "Search For Life",
         "Archaebacteria",
         "Earth Office",
         "Regolith Eaters",
         "Tectonic Stress Power"
      ],
      "PlayerId":3,
      "IsLocalPlayer":false,
      "Color":"Yellow",
      "Score":{
         "FinalScore":40,
         "TerraFormingRating":21,
         "VictoryPoints":2,
         "GreeneryScore":1,
         "CityScore":1,
         "MilestoneScore":[

         ],
         "AwardScore":[
            {
               "Name":"Landlord",
               "Score":5
            },
            {
               "Name":"Banker",
               "Score":0
            },
            {
               "Name":"Scientist",
               "Score":5
            },
            {
               "Name":"Thermalist",
               "Score":5
            },
            {
               "Name":"Miner",
               "Score":0
            }
         ]
      }
   }
};

const SMALL_COL_WIDTH = "32px";
const CELL_PADDING = 3;
const COL_STYLE = {
  fontSize: 20,
  fontWeight: 600,
  paddingLeft: CELL_PADDING,
  paddingRight: CELL_PADDING
};

const customStyles = {
  headCells: {
    style: {
      paddingLeft: CELL_PADDING,
      paddingRight: CELL_PADDING,
    }
  }
}

class PlayerSummary extends React.Component {

    render() {

        const cardsPlayed = this.props.playerData.get("CardsPlayed").reverse().map((value, key) => {
            return <div key={key}>{value}</div>
        });

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
      super(props);
      this.state = {
        playerStates: props.data === undefined ? Map() : fromJS(props.data),
        // playerStates: fromJS(mockData),
        countAwards: true,
        compact: true,
      };

      this.handleCountAwards = this.handleCountAwards.bind(this);
      this.handleCompact = this.handleCompact.bind(this);
    }

    componentDidMount() {
        const socket = io("localhost:5000");

        socket.on("connect", () => {
            console.log("connected!")
        })

        socket.on("update", (data) => {
            this.setState({ playerStates: this.state.playerStates.merge(fromJS(data))})
        })
    }

    handleCountAwards(event) {
      this.setState({ countAwards: Boolean(event.target.checked) });
    }

    handleCompact(event) {
      this.setState({ compact: Boolean(event.target.checked )});
    }

    render() {
        // const playerSummaries = this.state.playerStates.entrySeq().map(([key, value])=> {
        //     return <PlayerSummary key={key} playerData={value} />
        // })

        const scores = this.state.playerStates.entrySeq().map(([key, value])=> {
            let s = value.get("Score")

            // just asmodee things
            let color = value.get("Color");
            if (color === 'Grey') {
              color = 'Purple';
            }

            s = s.set("Color", color);

            s = s.set("MileStones", value
                .getIn(["Score", "MilestoneScore"])
                .map(value => value.get("Score"))
                .reduce((acc, val) => acc + val) || 0);

            s = s.set("Awards", value
                .getIn(["Score", "AwardScore"])
                .map(value => value.get("Score"))
                .reduce((acc, val) => acc + val) || 0);


            // subtract awards score from total if checked
            if (!this.state.countAwards) {
              const finalScore = s.get("FinalScore");
              const awardScore = value.getIn(['Score', 'AwardScore'])
                .map(value => value.get("Score"))
                .reduce((acc, val) => acc + val);
              const totalWithoutAwards = finalScore - awardScore;
              s = s.set("FinalScore", totalWithoutAwards);
            }

            return s;
        });

        console.log(scores.toJS())

        let columns = [
            {
                name: "Player",
                selector: "Color",
                width: "50px",
                style: {
                  paddingLeft: CELL_PADDING,
                  paddingRight: CELL_PADDING
                },
                conditionalCellStyles: [
                  {
                    when: row => row.Color === 'Purple',
                    style: {
                      backgroundColor: '#ad4fe8',
                      fontWeight: 600
                    }
                  },
                  {
                    when: row => row.Color === 'Green',
                    style: {
                      backgroundColor: '#48cf4b',
                      fontWeight: 600
                    }
                  },
                  {
                    when: row => row.Color === 'Yellow',
                    style: {
                      backgroundColor: '#e0da2b',
                      fontWeight: 600
                    }
                  },
                  {
                    when: row => row.Color === 'Red',
                    style: {
                      backgroundColor: '#e32441',
                      fontWeight: 600
                    }
                  },
                  {
                    when: row => row.Color === 'Blue',
                    style: {
                      backgroundColor: '#2470e3',
                      fontWeight: 600
                    }
                  },
                ]
            },
            {
              name: "Sum",
              selector: "FinalScore",
              width: SMALL_COL_WIDTH,
              style: COL_STYLE
            },
            {
              name: "Cty",
              selector: "CityScore",
              width: SMALL_COL_WIDTH,
              style: COL_STYLE
            },
            {
              name: "Grn",
              selector: "GreeneryScore",
              width: SMALL_COL_WIDTH,
              style: COL_STYLE
            },
            {
              name: "VP",
              selector: "VictoryPoints",
              width: SMALL_COL_WIDTH,
              style: COL_STYLE
            },
            {
              name: "MS",
              selector: "MileStones",
              width: SMALL_COL_WIDTH,
              style: COL_STYLE
            },
            {
              name: "Aw",
              selector: "Awards",
              width: SMALL_COL_WIDTH,
              style: COL_STYLE
            }
        ];

        if (!this.state.countAwards) {
          columns = columns.filter((column) => column.name !== 'Aw');
        }

        if (this.state.compact) {
          columns = columns.filter((column) => ["Player", "Sum"].includes(column.name));
        }

        return(
          <DataTable
            columns={columns}
            data={scores.toJS()}
            dense={true}
            theme='dark'
            noHeader
            subHeader
            subHeaderComponent={
              <div style={{ position: 'absolute', left: 0}}>
                <label style={{ color: 'white' }}>Awards?</label>
                <input style={{
                  marginRight: 10,
                  color: 'white'
                }} type="checkbox" checked={Boolean(this.state.countAwards)} onChange={this.handleCountAwards}/>
                <br/>
                <label style={{ color: 'white' }}>Compact?</label>
                <input type="checkbox" checked={Boolean(this.state.compact)} onChange={this.handleCompact}/>
              </div>
            }
            customStyles={customStyles}/>
        )
    }
}

export default TerraSummary;
