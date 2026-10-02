
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home, { createTask, filterTasks } from "./page/Home/Home";

export { createTask, filterTasks };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
