import React from 'react';
import TaskContext from '../Store/TaskS-context';
import './FilterButton.css';

type Props = {
  selectList: string[];
  onChange: (event: string) => void;
};

class FilterButton extends React.Component<Props> {
  onSelect = (event: any) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <select value={this.context.state.typeFilter} onChange={this.onSelect}>
        {this.props.selectList.map((el, index) => {
          return <option key={index}>{el}</option>;
        })}
      </select>
    );
  }
}

FilterButton.contextType = TaskContext;

export default FilterButton;
