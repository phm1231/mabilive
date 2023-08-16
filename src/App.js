import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Enchant from './pages/enchant';
import Stone from './pages/stone';
import Nav from './components/layout/navigationBar';
import Footer from './components/layout/footer';


function App() {

  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/enchant" element={<Enchant />}/>
          <Route path="/stone" element={<Stone />}/>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
