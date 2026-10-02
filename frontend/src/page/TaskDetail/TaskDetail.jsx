import { Link, useParams } from "react-router-dom";

import { loadTasks } from "../Home/Home";
import { formatDate, getTaskStatus } from "../../taskStatus";

function TaskDetail() {
  const { id } = useParams();
  const task = loadTasks().find((task) => task.id === Number(id));

  if (!task) {
    return (
      <main className="container">
        <section className="card">
          <p className="empty">Cette tâche n'existe pas ou a été supprimée.</p>
          <Link className="back-link" to="/">
            ← Retour à la liste
          </Link>
        </section>
      </main>
    );
  }

  const status = getTaskStatus(task);

  return (
    <main className="container">
      <section className="card task-detail">
        <Link className="back-link" to="/">
          ← Retour à la liste
        </Link>

        <div className="task-detail-header">
          <h2>{task.title}</h2>
          <span className={`status status-${status.key}`}>{status.label}</span>
        </div>

        <h3>Description</h3>
        <p className={task.description ? "" : "muted"}>
          {task.description || "Aucune description."}
        </p>

        <dl className="task-dates">
          <div>
            <dt>Créée le</dt>
            <dd>{formatDate(task.createdAt)}</dd>
          </div>
          <div>
            <dt>Échéance</dt>
            <dd>{formatDate(task.dueDate)}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

export default TaskDetail;
