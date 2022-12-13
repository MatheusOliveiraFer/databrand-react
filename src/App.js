//Settings
import { Routes, Route } from "react-router-dom";

//Pages
import Header from "./router/Layout/index";
import NotFound from "./router/NotFound";
import Efi from "./router/Parceiros/Efi";
import Enfocus from "./router/Parceiros/Enfocus";
import Databrand from "./router/databrand";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Efi" element={<Efi />} />
      <Route path="/Enfocus" element={<Enfocus />} />
      <Route path="/databrand" element={<Databrand />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;