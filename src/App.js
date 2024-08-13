import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home_Page/Home";
import Event from "./Components/Event_Page/Event";
import Error from "./Components/Error";
import Hackathon from "./Components/Hackthon_Page/Hackathon";
import Workshop from "./Components/Workshop_Page/Workshop";
import EventChoice from "./Components/Event_Page/EventChoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/department/:deptname" element={<EventChoice />} />
        <Route path="/department/:deptname/:eventname" element={<Event />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
