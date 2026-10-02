
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home/Home";


function App() {

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/a' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
