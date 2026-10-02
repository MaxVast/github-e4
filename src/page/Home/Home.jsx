import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const initialTasks = [
  {
    id: 1,
    title: "Découvrir le projet",
    description: "Lire le CONTRIBUTING.md et lancer l'application en local.",
    completed: true,
    createdAt: "2026-10-01T09:00:00.000Z",
    dueDate: "2026-10-01",
    priority: false
  },
  {
    id: 2,
    title: "Créer ma première branche",
    description: "Respecter la convention feature/..., fix/... ou docs/...",
    completed: false,
    createdAt: "2026-10-01T09:00:00.000Z",
    dueDate: "2026-10-03",
    priority: false
  },
  {
    id: 3,
    title: "Ouvrir une Pull Request",
    description: "Référencer l'Issue avec Closes #n et demander une revue.",
    completed: false,
    createdAt: "2026-10-01T09:00:00.000Z",
    dueDate: "2026-10-09",
    priority: false
  },
];

export function loadTasks() {
  const savedTasks = localStorage.getItem("team-tasks");

  return savedTasks ? JSON.parse(savedTasks) : initialTasks;
}

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

export function createTask(
  title,
  id = Date.now(),
  { description = "", dueDate = "", createdAt = new Date().toISOString() } = {},
) {
  return {
    id,
    title: title.trim(),
    description: description.trim(),
    completed: false,
    createdAt,
    dueDate,
    priority: false
  };
}

export function countRemainingTasks(tasks) {
  return tasks.filter((task) => !task.completed).length;
}

export function formatRemainingTasks(count) {
  const plural = count > 1 ? "s" : "";
  return `${count} tâche${plural} restante${plural}`;
}

export function countCompletedTasks(tasks) {
  return tasks.filter((task) => task.completed).length;
}

export function formatCompletedTasks(count) {
  const plural = count > 1 ? "s" : "";
  return `${count} tâche${plural} terminée${plural}`;
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
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
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

    saveTasks([...tasks, createTask(title, Date.now(), { description, dueDate })]);
    setTitle("");
    setDescription("");
    setDueDate("");
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

  const remainingCount = countRemainingTasks(tasks);
  const completedCount = countCompletedTasks(tasks);

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

          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Détails de la tâche (optionnel)"
            rows={2}
          />

          <label htmlFor="task-due-date">Échéance</label>
          <input
            id="task-due-date"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </form>

        <div className="toolbar">
          <div className="counters">
            <strong>{formatRemainingTasks(remainingCount)}</strong>
            <span>{formatCompletedTasks(completedCount)}</span>
          </div>

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
                      <Link className="details-link" to={`/tasks/${task.id}`}>
                        Détails
                      </Link>
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