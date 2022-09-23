//Settings
import { Routes, Route } from "react-router-dom";

//Pages
import Header from "./router/Layout/index";
import NotFound from "./router/NotFound";
import Efi from "./router/Parceiros/Efi";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Efi" element={<Efi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;