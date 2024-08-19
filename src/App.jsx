import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./Pages";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <main className="bg-slate-300/20">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
