import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Home, { createTask, filterTasks } from "./page/Home/Home";
import Login from "./page/Login/Login";
import TaskDetail from "./page/TaskDetail/TaskDetail";
import UserProfile from "./page/UserProfile/UserProfile";
import UserProvider from "./user/UserProvider";

export { createTask, filterTasks };

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tasks/:id' element={<TaskDetail/>} />
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
