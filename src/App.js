import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MyCv } from "./pages/MyCv";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyCv />} />
    </Routes>
  );
}

export default App;
