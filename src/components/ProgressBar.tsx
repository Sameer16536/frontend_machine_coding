import "../App.css";

const ProgressBar = ({progress})=>{


    return (
        <div>
            <h1>Progress Bar</h1>
            <div className="outer">
                <div className="inner" style={{width: `${progress}%`}}>
                    {progress}%
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;