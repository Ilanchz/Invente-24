import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home_Page/Home';
import Event from './Components/Event_Page/Event';
import Error from './Components/Error';
import Hackathon from './Components/Hackthon_Page/Hackathon';
import Workshop from './Components/Workshop_Page/Workshop';
import Hospitality from './Components/Hospitality_page/Hospitality';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/hackathon" element={<Hackathon/>} />
        <Route path="/workshop" element={<Workshop/>} />
        <Route path="/hospitality" element={<Hospitality/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
