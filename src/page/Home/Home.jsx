import { useMemo, useState } from "react";

const initialTasks = [
  { id: 1, title: "Découvrir le projet", completed: true, priority: false },
  { id: 2, title: "Créer ma première branche", completed: false, priority: true },
  { id: 3, title: "Ouvrir une Pull Request", completed: false, priority: false },
];

export function filterTasks(tasks, filter) {
  const orderedTasks = [...tasks].sort(
    (a, b) => Number(b.priority) - Number(a.priority),
  );

  if (filter === "todo") {
    return orderedTasks.filter((task) => !task.completed);
  }

  if (filter === "done") {
    return orderedTasks.filter((task) => task.completed);
  }

  if (filter === "priority") {
    return orderedTasks.filter((task) => task.priority);
  }

  return orderedTasks;
}

export function deleteTask(id) {
  if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
    saveTasks(tasks.filter((task) => task.id !== id));
  }
}

export function createTask(title, id = Date.now()) {
  return {
    id,
    title: title.trim(),
    completed: false,
    priority: false,
  };
}

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("team-tasks");

    if (!savedTasks) {
      return initialTasks;
    }

    try {
      const parsedTasks = JSON.parse(savedTasks);

      return Array.isArray(parsedTasks)
        ? parsedTasks.map((task) => ({
            ...task,
            completed: Boolean(task.completed),
            priority: Boolean(task.priority),
          }))
        : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  function saveTasks(nextTasks) {
    const normalizedTasks = nextTasks.map((task) => ({
      ...task,
      completed: Boolean(task.completed),
      priority: Boolean(task.priority),
    }));

    setTasks(normalizedTasks);
    localStorage.setItem("team-tasks", JSON.stringify(normalizedTasks));
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
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function togglePriority(id) {
    saveTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority: !task.priority } : task,
      ),
    );
  }

  function deleteTask(id) {
    saveTasks(tasks.filter((task) => task.id !== id));
  }

  function startEditing(task) {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  }

  function cancelEditing() {
    setEditingTaskId(null);
    setEditingTitle("");
  }

  function saveEditedTask(event, id) {
    event.preventDefault();

    const trimmedTitle = editingTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    saveTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: trimmedTitle } : task,
      ),
    );
    cancelEditing();
  }

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter],
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
            <button type="submit">Ajouter</button>
          </div>
        </form>

        <div className="toolbar">
          <strong>{remainingCount} tâche(s) restante(s)</strong>

          <div className="filters" aria-label="Filtrer les tâches">
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
            <button
              className={filter === "priority" ? "active" : ""}
              onClick={() => setFilter("priority")}
              type="button"
            >
              Prioritaires
            </button>
          </div>
        </div>

        <ul className="task-list">
          {visibleTasks.length === 0 ? (
            <li className="empty">Aucune tâche dans cette catégorie.</li>
          ) : (
            visibleTasks.map((task) => (
              <li className={`task ${task.priority ? "important" : ""}`} key={task.id}>
                {editingTaskId === task.id ? (
                  <form
                    className="edit-form"
                    onSubmit={(event) => saveEditedTask(event, task.id)}
                  >
                    <input
                      aria-label={`Modifier ${task.title}`}
                      value={editingTitle}
                      onChange={(event) => setEditingTitle(event.target.value)}
                      autoFocus
                    />
                    <div className="edit-actions">
                      <button type="submit">Enregistrer</button>
                      <button type="button" onClick={cancelEditing}>
                        Annuler
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="task-main">
                      <label className={task.completed ? "completed" : ""}>
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                        />
                        <span>{task.title}</span>
                      </label>

                      {task.priority && (
                        <span className="priority-badge">Prioritaire</span>
                      )}
                    </div>

                    <div className="task-actions">
                      <button
                        className={`priority-toggle ${task.priority ? "active" : ""}`}
                        type="button"
                        onClick={() => togglePriority(task.id)}
                        aria-label={
                          task.priority
                            ? `Retirer la priorité à ${task.title}`
                            : `Marquer ${task.title} comme prioritaire`
                        }
                      >
                        {task.priority ? "★" : "☆"}
                      </button>

                      <button
                        type="button"
                        onClick={() => startEditing(task)}
                        aria-label={`Modifier ${task.title}`}
                      >
                        Modifier
                      </button>

                      <button
                        className="delete"
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        aria-label={`Supprimer ${task.title}`}
                      >
                        Supprimer
                      </button>
                    </div>
                  </>
                )}
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

export default Home;