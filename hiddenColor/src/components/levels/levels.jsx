import "../../assets/css/Levels.css";
import { Link } from "react-router-dom";

function Levels() {

    const levels = [
        { number: 1, icon: "⭐" },
        { number: 2, icon: "🔥" },
        { number: 3, icon: "⚡" },
        { number: 4, icon: "💀" },
        { number: 5, icon: "🎯" },
        { number: 6, icon: "🧠" },
        { number: 7, icon: "👑" },
        { number: 8, icon: "🛡️" },
        { number: 9, icon: "⚔️" },
        { number: 10, icon: "🌟" }
    ];

    return (
        <div className="levels-wrapper">

            <h1 className="title">Select Level</h1>

            <div className="row justify-content-center g-4 mt-4">
                {levels.map((lvl) => (
                    <div className="col-4 col-sm-4 col-md-3 col-lg-2 level-col" key={lvl.number}>
                        <Link to={`/level${lvl.number}`} className="level-btn">
                            <span className="level-icon">{lvl.icon}</span>
                            <span className="level-text">Level {lvl.number}</span>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Levels;
