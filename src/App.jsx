import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetail from "./page/TaskDetail/TaskDetail";
import Home, { createTask, filterTasks } from "./page/Home/Home";

export { createTask, filterTasks };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
