//Settings
import { Routes, Route } from "react-router-dom";

//Pages
import Header from "./router/Layout/index";
import Servicos from "./router/Layout/servicos";
import Solucoes from "./router/Layout/solucoes";
import NotFound from "./router/NotFound";
import Efi from "./router/Parceiros/Efi";
import Enfocus from "./router/Parceiros/Enfocus";
import Databrand from "./router/databrand";
import Hybrid from "./router/Parceiros/Hybrid";
import TechnoGraphics from "./router/Parceiros/TechnoGraphics";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Servicos" element={<Servicos />} />
      <Route path="/Solucoes" element={<Solucoes />} />
      <Route path="/Efi" element={<Efi />} />
      <Route path="/Enfocus" element={<Enfocus />} />
      <Route path="/Hybrid" element={<Hybrid />} />
      <Route path="/databrand" element={<Databrand />} />
      <Route path="/UltimateTechnoGraphics" element={<TechnoGraphics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;