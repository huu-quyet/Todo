import React from 'react';
import { Task } from '../App';
import classes from './CardList.module.css';
import './AddTask.css';

type Props = {
  onDelete: () => void;
  onDone: () => void;
  task: Task;
  index: number;
};

type State = {
  hover: boolean;
};

class Card extends React.Component<Props, State> {
  state: State = {
    hover: false,
  };

  _onHover = () => {
    this.setState({ hover: true });
  };

  _onLeave = () => {
    this.setState({ hover: false });
  };
  render() {
    return (
      <li onMouseEnter={this._onHover} onMouseLeave={this._onLeave}>
        <div
          className={this.props.task.status ? classes.done : ''}
          onClick={this.props.onDone}
        >
          {' '}
          {this.props.index + 1}. {this.props.task.task}
        </div>
        {this.state.hover && (
          <i onClick={this.props.onDelete} className="fas fa-trash"></i>
        )}
      </li>
    );
  }
}

export default Card;
