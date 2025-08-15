import { useState } from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Gym', completed: true },
    { id: 2, text: 'Coffee with Liz', completed: true },
    { id: 3, text: 'Pick up kids', completed: true },
    { id: 4, text: 'Meal prep', completed: false },
  ]);

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <div style={{ width: 800, height: 600, background: '#c2dcff', borderRadius: 8, padding: 24 }}></div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
