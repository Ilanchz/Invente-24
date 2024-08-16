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
        <Route path="/department/cse" element={<Event dept={"cse"}/>} />
        <Route path="/department/it" element={<Event dept={"it"}/>} />
        <Route path="/department/ece" element={<Event dept={"ece"}/>} />
        <Route path="/department/eee" element={<Event dept={"eee"}/>} />
        <Route path="/department/me" element={<Event dept={"me"}/>} />
        <Route path="/department/ce" element={<Event dept={"ce"}/>} />
        <Route path="/department/bme" element={<Event dept={"bme"}/>} />
        <Route path="/department/cv" element={<Event dept={"cv"}/>} />
        <Route path="/hackathon" element={<Hackathon/>} />
        <Route path="/workshop" element={<Workshop/>} />
        <Route path="/hospitality" element={<Hospitality/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
