import React from 'react';
import { Task } from '../App';
import TaskContext from '../Store/TaskS-context';
import './AddTask.css';
import Button from '../UI/Button';

interface State {
  id: string;
  value: string;
}
class AddTask extends React.Component<any, State> {
  state: State = {
    id: '',
    value: '',
  };

  _onChangeText = (text: any) => {
    this.setState({ value: text.target.value });
  };

  _updateTask = (e: any) => {
    e.preventDefault();
    if (!this.state.value) return;
    let task: Task = {
      id: Math.random().toString(),
      task: this.state.value,
      status: false,
    };
    this.context.addTask(task);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this._updateTask}>
        <input onChange={this._onChangeText} value={this.state.value} />
        <Button onButtonSubmit={this._updateTask}></Button>
      </form>
    );
  }
}

AddTask.contextType = TaskContext;

export default AddTask;
