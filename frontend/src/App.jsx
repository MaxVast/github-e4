import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home/Home";
import Login from "./page/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
