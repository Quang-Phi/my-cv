import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MyCv } from "./pages/MyCv";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyCv />} />
    </Routes>
  );
}

export default App;
