import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import Venda from "./pages/Venda/Venda";
import Compra from "./pages/Compra/Compra";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="compra" element={<Compra />} />
          <Route path="venda" element={<Venda />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
