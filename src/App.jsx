import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetail from "./page/TaskDetail/TaskDetail";
import Home, { createTask, filterTasks } from "./page/Home/Home";
import AppErrorBoundary from "./components/AppErrorBoundary";
import InternalServerError from "./page/Errors/500/InternalServerError";
import NotFound from "./page/Errors/404/NotFound";

export { createTask, filterTasks };

function App() {
  return (
    <BrowserRouter>
      <AppErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/500" element={<InternalServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
