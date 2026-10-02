import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import UserProvider from "./user/UserProvider";


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/a' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
