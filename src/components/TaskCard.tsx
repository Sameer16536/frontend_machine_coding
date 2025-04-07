
import { memo } from "react";
import { BiEdit, BiCheck, BiTrash } from "react-icons/bi";


interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

const TaskCard = ({id ,title,description ,status , onComplete,onDelete}:TaskCardProps) => {

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-3 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-600"
            title="Delete"
          >
            <BiTrash size={20} />
          </button>
{status !== "Done" && (
            <button
            onClick={() => onComplete(id)}
            className="text-green-500 hover:text-green-600"
            title="Mark as Done"
          >
            <BiCheck size={20} />
          </button>
)}
          <button
            className="text-blue-500 hover:text-blue-600"
            title="Edit (Coming Soon)"
          >
            <BiEdit size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(TaskCard);