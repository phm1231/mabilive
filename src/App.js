import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Enchant from './pages/enchant';
import Nav from './components/layout/navigationBar';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 bg-light">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/enchant" element={<Enchant />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
