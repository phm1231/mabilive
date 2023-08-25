import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Enchant from './pages/enchant';
import Nav from './components/layout/navigationBar';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 bg-light">
      <Nav />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/enchant" element={<Enchant />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
