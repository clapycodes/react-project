// import logo from './logo.svg';
import './App.css';
import TaskBoard from './TaskBoard';
import Column from './Column';
import Task from './Task';

function App() {
  return (
 <div className="App">
   <TaskBoard title="To Do" /> 
   <Column name="To Do" /> 
   <Task title="Learn React" />
 </div>
  );
}

export default App;
