import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import ErrorPage from "./components/Errorpage";
import Contact from "./pages/Contact";
import Destn from "./pages/Destn";
import Accomodation from "./pages/Accomodation";
import Package from "./pages/Package";
import Offer from "./pages/Offer";
import India from "./pages/India";
import Japan from "./pages/Japan";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/destn" element={<Destn />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/package" element={<Package />} />
          <Route path="/offer" element={<Offer />} />

          <Route path="/india" element={<India />} />
          <Route path="japan" element={<Japan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
