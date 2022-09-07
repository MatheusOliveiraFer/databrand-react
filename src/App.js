//Settings
import { Routes, Route } from "react-router-dom";

//Pages
import Header from "./router/Layout/Header";
import NotFound from "./router/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;