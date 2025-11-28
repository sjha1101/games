import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Level1.css";

function Level1() {

    const navigate = useNavigate();

    const restartGame = () => {
        navigate(0);         // Refresh page → Restart everything
    };

    const [life, setLife] = useState(2);
    const [time, setTime] = useState(10);
    const [correctIndex] = useState(Math.floor(Math.random() * 5));

    // GAME OVER FUNCTION
    const gameOver = () => {
        const again = window.confirm("Game Over! Do you want to play again?");
        if (again) {
            restartGame();
        } else {
            navigate("/");   // Go to home OR any page you want
        }
    };

    // TIMER LOGIC
    useEffect(() => {
        if (time === 0) {
            gameOver();
            return;
        }

        const interval = setInterval(() => {
            setTime(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);


    // CIRCLE CLICK LOGIC
    const handleClick = (index) => {
        if (index === correctIndex) {
            navigate("/level2");
        } else {
            if (life > 1) {
                setLife(life - 1);
            } else {
                gameOver();
            }
        }
    };

    return (
        <div className="container-fluid game-container">

            {/* Top Row */}
            <div className="row px-5">
                <div className="col-auto bg-white text-dark px-4 py-2 rounded fs-4">
                    Life : {life}
                </div>

                <div className="col text-end">
                    <div className="bg-white text-dark px-4 py-2 rounded fs-4 d-inline-block">
                        Time : {time}
                    </div>
                </div>
            </div>

            {/* Circles */}
            <div className="row justify-content-center mt-5 g-4">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="col-4 col-md-2 d-flex justify-content-center"
                    >
                        <div
                            className="circle-btn"
                            onClick={() => handleClick(i)}
                        ></div>
                    </div>
                ))}
            </div>

            <h4>Find the correct circle</h4>

            {/* Bottom Block */}
            <div className="bottom-block"></div>

        </div>
    );
}

export default Level1;
