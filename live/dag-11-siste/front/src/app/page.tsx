import { useEffect, useState } from "react"
// import Image from "next/image";
import Task from "./features/tasks/components/Task";
import TaskList from "./features/tasks/components/TaskList";
// import TaskList from "./features/tasks/components/TaskList";

const initialTask = [
  { id: 0, title: "Task 1" },
  { id: 1, title: "Task 2" }
]

export default function Home() {
  const [title, setTitle] = useState("")
  return (
    <main>
      {/* <Task title={title} /> */}
      <TaskList />

    </main>
  )
}
