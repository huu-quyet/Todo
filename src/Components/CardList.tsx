import React from 'react';
import TaskContext from '../Store/TaskS-context';
import FilterButton from '../UI/FilterButton';
import Card from './Card';
import './CardList.css';

interface State {
  listOption: string[];
}

class CardList extends React.Component<any, State> {
  state = {
    listOption: ['All', 'Done', 'To Do'],
  };

  render() {
    return (
      <div className="card">
        <div className="card--title">
          <p>List: </p>
          <FilterButton
            selectList={this.state.listOption}
            onChange={this.context.onSelect}
          ></FilterButton>
        </div>
        <ul>
          {this.context.state.tasksFilter.map((task: any, index: number) => {
            return (
              <Card
                onDone={() => this.context.onDone(task)}
                onDelete={() => {
                  this.context.onDelete(task);
                }}
                key={task.id}
                task={task}
                index={index}
              ></Card>
            );
          })}
        </ul>
      </div>
    );
  }
}

CardList.contextType = TaskContext;

export default CardList;
