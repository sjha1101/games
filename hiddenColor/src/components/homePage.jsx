import { Link } from "react-router-dom";

function HomePage() {

    const highScore = localStorage.getItem("bestScore") || 0;

    return (
        <div className="container text-center mt-5">

            <h1 className="mb-4 fw-bold">Find the hidden color </h1>

            <div className="row justify-content-center mb-4">
                <div className="col-10 col-md-4 bg-light p-3 m-2 rounded shadow">
                    <h4>High score</h4>
                    <p className="fs-3">{highScore}</p>
                </div>
            </div>

            <div className="mt-4">
                <Link to="/level1" className="btn btn-primary btn-lg px-4 py-2 m-2">
                    ▶ Start
                </Link>

                <Link to="/levels" className="btn btn-success btn-lg px-4 py-2 m-2">
                    📋 View All Levels
                </Link>
            </div>

        </div>
    );
}

export default HomePage;
