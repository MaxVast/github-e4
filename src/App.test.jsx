import { describe, expect, it } from "vitest";
import { createTask, filterTasks } from "./page/Home/Home";

describe("createTask", () => {
  it("creates an incomplete task", () => {
    expect(
      createTask("  Tester la CI  ", 42, {
        description: "  Vérifier le pipeline  ",
        dueDate: "2026-10-09",
        createdAt: "2026-10-02T08:00:00.000Z"
      })
    ).toEqual({
      id: 42,
      title: "Tester la CI",
      description: "Vérifier le pipeline",
      completed: false,
      createdAt: "2026-10-02T08:00:00.000Z",
      dueDate: "2026-10-09"
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