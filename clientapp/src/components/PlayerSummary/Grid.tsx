import "./style.css";


const Grid: React.FC = ({ children }) => {

    return (
        <div>
            <div className={"grid-container"}>
                {children}
            </div>
        </div>
    )

}

export default Grid