
import { BrowserRouter, Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import Home from "./page/Home/Home";
import TaskDetail from "./page/TaskDetail/TaskDetail";
=======
import Home, { createTask, filterTasks } from "./page/Home/Home";
>>>>>>> 8df695d (feat(task-priority) ajouter la priorité des tâches #25)

export { createTask, filterTasks };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<TaskDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
