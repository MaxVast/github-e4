import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import UserProfile from "./page/UserProfile/UserProfile";
import UserProvider from "./user/UserProvider";


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/a' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <UserProfile/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
