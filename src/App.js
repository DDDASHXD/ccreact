import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Grid, Breakpoint, } from 'react-bootstrap'
import Landing from './views/Landing';
import './style/variables.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
