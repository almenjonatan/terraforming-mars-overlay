import io from "socket.io-client";
import * as React from "react";
import DataTable, {createTheme} from 'react-data-table-component';
import {getColumns} from "./columns";

const { Map, fromJS } = require('immutable');

const CELL_PADDING = 3;

const customStyles = {
  headCells: {
    style: {
      paddingLeft: CELL_PADDING,
      paddingRight: CELL_PADDING,
    }
  }
}

createTheme('default', {
    background: "rgba(255, 255, 255, 0)",
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(0,0,0,.12)',
    },
});

const createScoreData = (playerStates, countAwards) => {
    return playerStates.entrySeq().map(([key, value])=> {
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
        if (countAwards) {
          const finalScore = s.get("FinalScore");
          const awardScore = value.getIn(['Score', 'AwardScore'])
            .map(value => value.get("Score"))
            .reduce((acc, val) => acc + val);
          const totalWithoutAwards = finalScore - awardScore;
          s = s.set("FinalScore", totalWithoutAwards);
        }

        return s;
    });
}

class TerraSummary extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        playerStates: props.data === undefined ? Map() : fromJS(props.data),
        countAwards: false,
        compact: false,
        streamerMode: false,
      };

      this.handleCountAwards = this.handleCountAwards.bind(this);
      this.handleCompact = this.handleCompact.bind(this);
      this.handleStreamerMode = this.handleStreamerMode.bind(this);
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

    handleStreamerMode(event) {
      this.setState({ streamerMode: Boolean(event.target.checked )});
    }

    render() {
        const columns = getColumns(!this.state.countAwards, this.state.compact);
        const scores = createScoreData(this.state.playerStates, !this.state.countAwards);
        const theme = this.state.streamerMode ? 'default' : 'dark';

        return(
          <DataTable
            columns={columns}
            data={scores.toJS()}
            theme={theme}
            dense
            noHeader
            subHeader
            subHeaderAlign="left"
            subHeaderComponent={
              <div style={{ marginBottom: "30px", marginLeft: 0, float: "left"}}>
                <label style={{ color: 'white' }}>Awards?</label>
                <input style={{
                  marginRight: 10,
                  color: 'white'
                }} type="checkbox" checked={Boolean(this.state.countAwards)} onChange={this.handleCountAwards}/>
                <br/>
                <label style={{ color: 'white', marginRight: 10 }}>Compact?</label>
                <input type="checkbox" checked={Boolean(this.state.compact)} onChange={this.handleCompact}/>
                <br/>
                <label style={{ color: 'white', marginRight: 10 }}>Streamer Mode?</label>
                <input type="checkbox" checked={Boolean(this.state.streamerMode)} onChange={this.handleStreamerMode}/>
              </div>
            }
            customStyles={customStyles}/>
        )
    }
}

export default TerraSummary;
