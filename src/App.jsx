import { useMemo, useState } from "react";

const initialTasks = [
  { id: 1, title: "Découvrir le projet", completed: true },
  { id: 2, title: "Créer ma première branche", completed: false },
  { id: 3, title: "Ouvrir une Pull Request", completed: false }
];

export function filterTasks(tasks, filter) {
  if (filter === "todo") {
    return tasks.filter((task) => !task.completed);
  }

  if (filter === "done") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

export function createTask(title, id = Date.now()) {
  return {
    id,
    title: title.trim(),
    completed: false
  };
}

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("team-tasks");

    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  function saveTasks(nextTasks) {
    setTasks(nextTasks);
    localStorage.setItem("team-tasks", JSON.stringify(nextTasks));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    saveTasks([...tasks, createTask(title)]);
    setTitle("");
  }

  function toggleTask(id) {
    saveTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    saveTasks(tasks.filter((task) => task.id !== id));
  }

  // Nouvelle fonctionnalité
  function deleteCompletedTasks() {
    saveTasks(tasks.filter((task) => !task.completed));
  }

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  );

  const remainingCount = tasks.filter((task) => !task.completed).length;

  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">GitHub Team Workshop</p>

        <h1>Team Tasks</h1>

        <p>
          Une petite application React pour apprendre à travailler en équipe
          comme en entreprise.
        </p>
      </header>

      <section className="card">
        <form className="task-form" onSubmit={handleSubmit}>
          <label htmlFor="task-title">Nouvelle tâche</label>

          <div className="form-row">
            <input
              id="task-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ex. Ajouter un test"
            />

            <button type="submit">
              Ajouter
            </button>
          </div>
        </form>

        <div className="toolbar">
          <strong>
            {remainingCount} tâche(s) restante(s)
          </strong>

          <div
            className="filters"
            aria-label="Filtrer les tâches"
          >
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
              type="button"
            >
              Toutes
            </button>

            <button
              className={filter === "todo" ? "active" : ""}
              onClick={() => setFilter("todo")}
              type="button"
            >
              À faire
            </button>

            <button
              className={filter === "done" ? "active" : ""}
              onClick={() => setFilter("done")}
              type="button"
            >
              Terminées
            </button>
          </div>

          {/* Nouvelle fonctionnalité */}
          <button
            className="delete-completed"
            type="button"
            onClick={deleteCompletedTasks}
            disabled={!tasks.some((task) => task.completed)}
          >
            Supprimer les terminées
          </button>
        </div>

        <ul className="task-list">
          {visibleTasks.length === 0 ? (
            <li className="empty">
              Aucune tâche dans cette catégorie.
            </li>
          ) : (
            visibleTasks.map((task) => (
              <li className="task" key={task.id}>
                <label
                  className={task.completed ? "completed" : ""}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />

                  <span>{task.title}</span>
                </label>

                <button
                  className="delete"
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Supprimer ${task.title}`}
                >
                  Supprimer
                </button>
              </li>
            ))
          )}
        </ul>
      </section>

      <footer>
        <span>React + Vite</span>
        <span>•</span>
        <span>GitHub Flow</span>
      </footer>
    </main>
  );
}

export default App;