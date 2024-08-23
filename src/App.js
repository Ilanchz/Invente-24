import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home_Page/Home';
import Event from './Components/Event_Page/Event';
import Error from './Components/Error';
import Hackathon from './Components/Hackthon_Page/Hackathon';
import Workshop from './Components/Workshop_Page/Workshop';
import Hospitality from './Components/Hospitality_page/Hospitality';
import Schedule from './Components/Schedule';
import Sponsors from './Components/Sponsors';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About_Page/about_page';
import ScrollToTop from './Components/ScrollToTop'; // Adjust import path as needed

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is included to handle scrolling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department/cse" element={<Event dept="cse" />} />
        <Route path="/department/it" element={<Event dept="it" />} />
        <Route path="/department/ece" element={<Event dept="ece" />} />
        <Route path="/department/eee" element={<Event dept="eee" />} />
        <Route path="/department/me" element={<Event dept="me" />} />
        <Route path="/department/ce" element={<Event dept="ce" />} />
        <Route path="/department/bme" element={<Event dept="bme" />} />
        <Route path="/department/cv" element={<Event dept="cv" />} />
        <Route path="/department/com" element={<Event dept="com" />} />
        <Route path="/hackathonAndworkshop" element={<Hackathon />} /> {/* Fixed the path */}
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
