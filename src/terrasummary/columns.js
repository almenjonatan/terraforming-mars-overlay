const CELL_PADDING = 3;
const SMALL_COL_WIDTH = "32px";
const COL_STYLE = {
  fontSize: 20,
  fontWeight: 600,
  paddingLeft: CELL_PADDING,
  paddingRight: CELL_PADDING
};

export const getColumns = (awards, compact) => {
    return [
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
            style: COL_STYLE,
            omit: compact
        },
        {
            name: "Grn",
            selector: "GreeneryScore",
            width: SMALL_COL_WIDTH,
            style: COL_STYLE,
            omit: compact
        },
        {
            name: "VP",
            selector: "VictoryPoints",
            width: SMALL_COL_WIDTH,
            style: COL_STYLE,
            omit: compact
        },
        {
            name: "MS",
            selector: "MileStones",
            width: SMALL_COL_WIDTH,
            style: COL_STYLE,
            omit: compact
        },
        {
            name: "Aw",
            selector: "Awards",
            width: SMALL_COL_WIDTH,
            style: COL_STYLE,
            omit: awards || compact
        }
    ];
}