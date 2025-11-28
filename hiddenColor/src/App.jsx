import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/homePage";
import Levels from "./components/levels/levels";
import Level1 from "./components/levels/level1";
import Level2 from "./components/levels/level2";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
      </Routes>
    </Router>
  )
}

export default App
