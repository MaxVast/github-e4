export function filterTasks(tasks, filter) {
  if (filter === "todo") {
    return tasks.filter((task) => !task.completed);
  }

  if (filter === "done") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

export function searchTasks(tasks, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return tasks;
  }

  return tasks.filter((task) =>
    task.title.toLocaleLowerCase().includes(normalizedQuery),
  );
}

export function createTask(title, id = Date.now()) {
  return {
    id,
    title: title.trim(),
    completed: false,
  };
}
