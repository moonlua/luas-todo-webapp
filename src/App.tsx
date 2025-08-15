import Header from './components/Header';
import TimeNow from './components/TimeNow';
import Progress from './components/Progress';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <aside className="sidebar">
          <div className="sidebar-block">
  <TimeNow />
</div>
<div className="sidebar-block">
  <Progress />
</div>
        </aside>
        <section className="tasks">
          <TaskList />
        </section>
      </div>
    </div>
  );
}
