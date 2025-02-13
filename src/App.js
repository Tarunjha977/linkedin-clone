import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Joinnow from './Pages/Joinnow';
import Firlasnam from './Pages/Firlasnam';
import Locatjob from './Pages/Locatjob';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Joinnow" element={<Joinnow />} />
        <Route path="/Firlasnam" element={<Firlasnam />} />
        <Route path="/Locatjob" element={<Locatjob />} />
        <Route path="/Articles" element={<Articles />} />
      </Routes>
    </Router>
  )
}

export default App
