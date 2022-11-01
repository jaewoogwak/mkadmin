import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./Layout";
import Home from "./pages/Home/Home";
import Management from "./pages/Management/Management";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Management />} />
      </Routes>
    </>
  );
}

export default App;
