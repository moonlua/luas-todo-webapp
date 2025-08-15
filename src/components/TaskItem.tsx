import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskItem({ task, toggleComplete, deleteTask }: TaskItemProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem',
      background: task.completed ? '#f0f0f0' : 'white',
      textDecoration: task.completed ? 'line-through' : 'none',
      marginBottom: '0.5rem',
      borderRadius: '4px'
    }}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>🗑</button>
    </div>
  );
}
