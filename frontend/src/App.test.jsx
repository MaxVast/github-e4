import { describe, expect, it } from "vitest";
import { createTask, filterTasks } from "./App";

describe("createTask", () => {
  it("creates an incomplete task", () => {
    expect(createTask("  Tester la CI  ", 42)).toEqual({
      id: 42,
      title: "Tester la CI",
      completed: false,
      priority: false,
    });
  });
});

describe("filterTasks", () => {
  const tasks = [
    { id: 1, title: "A", completed: false, priority: true },
    { id: 2, title: "B", completed: false, priority: false },
    { id: 3, title: "C", completed: true, priority: true }
  ];

  it("returns all tasks", () => {
    expect(filterTasks(tasks, "all")).toHaveLength(3);
  });

  it("returns only todo tasks", () => {
    expect(filterTasks(tasks, "todo")).toEqual([tasks[0], tasks[1]]);
  });

  it("returns only completed tasks", () => {
    expect(filterTasks(tasks, "done")).toEqual([tasks[2]]);
  });

  it("returns only priority tasks", () => {
    expect(filterTasks(tasks, "priority")).toEqual([tasks[0], tasks[2]]);
  });
});