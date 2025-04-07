export interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}

export interface ColumnProps {
  title: "To Do" | "In Progress" | "Done";
  tasks: Task[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}
