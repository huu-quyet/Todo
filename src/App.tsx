import React from 'react';
import Title from './UI/Title';
import AddTask from './Components/AddTask';
import CardList from './Components/CardList';
import TaskContext from './Store/TaskS-context';
import './App.css';

export type Task = {
  id: string;
  task: string;
  status: boolean;
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <AddTask></AddTask>
        <CardList />
      </div>
    );
  }
}

App.contextType = TaskContext;

export default App;
