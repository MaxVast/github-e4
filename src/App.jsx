import { useMemo, useState } from "react";

const initialTasks = [
  { id: 1, title: "Découvrir le projet", completed: true },
  { id: 2, title: "Créer ma première branche", completed: false },
  { id: 3, title: "Ouvrir une Pull Request", completed: false }
];

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home/Home";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
