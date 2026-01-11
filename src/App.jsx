import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/banner/Banner";
import Apropos from "./components/apropos/Apropos";
import Services from "./components/services/Services";
import PourquoiNousChoisir from "./components/pourquoi/PourquoiNousChoisir";
import Faq from "./components/faq/Faq";
import WhatsAppButton from "./components/whatssap/WhatsAppButton";
import Temoignages from "./components/temoignages/Temoignages";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Plomberie from "./pages/services/Plomberie";
import Menuiserie from "./pages/services/Menuiserie";
import Electricite from "./pages/services/Electricite";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Ici, Routes pour toutes les pages */}
      <Routes>
        {/* Page d'accueil */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Apropos />
              <Services />
              <PourquoiNousChoisir />
              <Temoignages />
              <Faq />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Pages services */}
        <Route path="/services/plomberie" element={<Plomberie />} />
        <Route path="/services/menuiserie" element={<Menuiserie />} />
        <Route path="/services/electricite" element={<Electricite />} />
      </Routes>

      {/* Bouton WhatsApp flottant visible sur toutes les pages */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
