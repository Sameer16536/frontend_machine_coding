import { ColumnProps } from "../types/Props";
import TaskCard from "./TaskCard";


const Column = ({ title, tasks, onDelete, onComplete }: ColumnProps) => {
    return (
      <div className="bg-white rounded-xl p-4 min-w-[300px] shadow">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    );
  };
export default Column;  