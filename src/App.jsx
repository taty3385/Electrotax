
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutsUs";
import Contact from "./components/Contact";
import Header from "./views/Header";
import Home from "./views/Home";
import ContainerCard from "./components/containerCard";
import Footer from "./views/Footer";
import Detail from "./views/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/category/:category" element={<ContainerCard />} />
        <Route path="/detail/:collectionName/:id" element={<Detail />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
