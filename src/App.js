import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Event from './Components/Event';
import Error from './Components/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
