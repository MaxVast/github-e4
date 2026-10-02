import { describe, expect, it } from "vitest";
import { createTask, filterTasks, searchTasks } from "./tasks";

describe("createTask", () => {
  it("creates an incomplete task", () => {
    expect(createTask("  Tester la CI  ", 42)).toEqual({
      id: 42,
      title: "Tester la CI",
      completed: false
    });
  });
});

describe("filterTasks", () => {
  const tasks = [
    { id: 1, title: "A", completed: false },
    { id: 2, title: "B", completed: true }
  ];

  it("returns all tasks", () => {
    expect(filterTasks(tasks, "all")).toHaveLength(2);
  });

  it("returns only todo tasks", () => {
    expect(filterTasks(tasks, "todo")).toEqual([tasks[0]]);
  });

  it("returns only completed tasks", () => {
    expect(filterTasks(tasks, "done")).toEqual([tasks[1]]);
  });
});

describe("searchTasks", () => {
  const tasks = [
    { id: 1, title: "Installer Docker", completed: true },
    { id: 2, title: "Créer le Dockerfile", completed: false },
    { id: 3, title: "Ouvrir une Pull Request", completed: false }
  ];

  it("returns tasks whose title contains the query", () => {
    expect(searchTasks(tasks, "docker")).toEqual([tasks[0], tasks[1]]);
  });

  it("ignores case", () => {
    expect(searchTasks(tasks, "DOCKERFILE")).toEqual([tasks[1]]);
  });

  it("returns all tasks for an empty query", () => {
    expect(searchTasks(tasks, "")).toEqual(tasks);
    expect(searchTasks(tasks, "   ")).toEqual(tasks);
  });

  it("returns no tasks when nothing matches", () => {
    expect(searchTasks(tasks, "kubernetes")).toEqual([]);
  });

  it("combines with the status filter", () => {
    expect(searchTasks(filterTasks(tasks, "todo"), "docker")).toEqual([
      tasks[1]
    ]);
  });
});
