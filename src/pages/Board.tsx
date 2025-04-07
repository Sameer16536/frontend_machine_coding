import { useCallback, useState } from "react";
import Column from "../components/Column";
import { Task } from "../types/Props";

const sampleData:Task[] = [
    { id: 1, title: "Task 1", description: "Description 1", status: "To Do" },
  { id: 2, title: "Task 2", description: "Description 2", status: "To Do" },
  { id: 3, title: "Task 3", description: "Description 3", status: "In Progress" },
  { id: 4, title: "Task 4", description: "Description 4", status: "Done" },
]

const Board = ()=>{
    const [tasks, setTasks] = useState<Task[]>(sampleData);
    const handleDelete = useCallback((id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
      }, []);
    
      const handleComplete = useCallback((id: number) => {
        setTasks(prev =>
          prev.map(task =>
            task.id === id ? { ...task, status: "Done" } : task
          )
        );
      }, []);

    return (
        <div className="min-h-screen bg-slate-500 p-6">
            <h1 className="text-3xl font-bold mb-6">Task</h1>
            <div className="flex gap-6 overflow-auto">
                {["To Do", "In Progress", "Done"].map((status) => (
                    <Column
                        key={status}
                        title={status as  Task["status"]} 
                        tasks={tasks.filter((task) => task.status === status)}
                        onComplete={handleComplete}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;