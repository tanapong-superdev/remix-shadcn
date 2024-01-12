import { faker } from "@faker-js/faker";
export type Task = {
  task: string;
  title: string;
  tags: string;
  status: "inprogress" | "backlog" | "todo" | "done" | "cancel";
  priority: "low" | "medium" | "high";
};
let tasks: Task[] = [];
const taskManager = TaskManager();
export default function TaskManager() {
  function getAll() {
    return tasks;
  }
  function get(taskId: string) {
    return tasks.find((task) => task.task === taskId);
  }
  function addTask(task: Task) {
    tasks.push(task);
  }
  return { getAll, addTask, get };
}
export async function getTasks(query?: string | null) {
  const tasks = taskManager.getAll();
  if (query) {
    return tasks.filter((task: Task) =>
      task.title?.toLowerCase().includes(query.toLowerCase())
    );
  }
  return tasks;
}
function getRandomTaskId() {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `TASK-${randomDigits}`;
}
Array.from({ length: 100 }, (_, index) => {
  taskManager.addTask({
    task: getRandomTaskId(),
    title: faker.lorem.sentence(),
    status: faker.helpers.arrayElement([
      "inprogress",
      "backlog",
      "todo",
      "done",
      "cancel",
    ]),
    tags: faker.helpers.arrayElement(["Documentation", "Bug", "Feature"]),
    priority: faker.helpers.arrayElement(["low", "medium", "high"]),
  });
});
