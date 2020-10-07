import io from "socket.io-client";
import * as React from "react";
import DataTable from 'react-data-table-component';
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


        let columns = getColumns(!this.state.countAwards, this.state.compact)
        let scores = createScoreData(this.state.playerStates, !this.state.countAwards)

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
