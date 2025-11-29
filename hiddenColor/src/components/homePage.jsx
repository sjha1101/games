import { Link } from "react-router-dom";
import "../assets/css/HomePage.css";

function HomePage() {

    const highScore = localStorage.getItem("bestScore") || 0;

    return (
        <div className="home-wrapper text-center">

            <h6 className="home-title">Find the hidden color</h6>

            <div className="row justify-content-center mb-4">
                <div className="col-7 col-md-4 score-box">
                    <h4>High Score</h4>
                    <p>{highScore}</p>
                </div>
            </div>

            <div className="mt-4">
                <Link to="/level1" className="btn btn-primary btn-game m-2">
                    ▶ Start
                </Link>

                <Link to="/levels" className="btn btn-success btn-game m-2">
                    📋 View All Levels
                </Link>
            </div>

        </div>
    );
}

export default HomePage;
