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
                        background: 'linear-gradient(rgb(146, 112, 166), rgb(188, 153, 238))',
                        fontWeight: 600
                    }
                },
                {
                    when: row => row.Color === 'Green',
                    style: {
                        background: 'linear-gradient(rgb(76, 164, 70), rgb(153, 208, 142))',
                        fontWeight: 600
                    }
                },
                {
                    when: row => row.Color === 'Yellow',
                    style: {
                        background: 'linear-gradient(rgb(254, 197, 0), rgb(176, 164, 118))',
                        fontWeight: 600
                    }
                },
                {
                    when: row => row.Color === 'Red',
                    style: {
                        background: 'linear-gradient(rgb(253, 27, 75), rgb(247, 151, 151))',
                        fontWeight: 600
                    }
                },
                {
                    when: row => row.Color === 'Blue',
                    style: {
                        background: 'linear-gradient(rgb(43, 157, 254), rgb(115, 147, 242))',
                        fontWeight: 600
                    }
                },
            ]
        },
        {
            name: "Sum",
            selector: "FinalScore",
            // convert px to int, add a buffer, then back to px string
            width: `${parseInt(SMALL_COL_WIDTH.split("px")[0], 10) + 10}px`,
            style: COL_STYLE,
            sortable: true,
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
