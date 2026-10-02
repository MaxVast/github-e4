export function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getTaskStatus(task, today = new Date()) {
  if (task.completed) {
    return { key: "done", label: "Terminée" };
  }

  if (task.dueDate && task.dueDate < toDateInputValue(today)) {
    return { key: "late", label: "En retard" };
  }

  return { key: "todo", label: "À faire" };
}

export function formatDate(value) {
  if (!value) {
    return "Non renseignée";
  }

  // Une date "AAAA-MM-JJ" est lue en heure locale pour éviter un décalage d'un jour.
  const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T00:00:00`)
    : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Non renseignée";
  }

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
