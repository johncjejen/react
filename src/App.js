import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*componente propio greeting.jsx*/}
        {/*<Greeting name='John'></Greeting>*/}
        {/*<GreetingF name='John'></GreetingF>*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
