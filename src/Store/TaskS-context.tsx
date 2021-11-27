import React from 'react';

export type Task = {
  id: string;
  task: string;
  status: boolean;
};
interface IAppState {
  tasks: Task[];
  typeFilter: string;
  tasksFilter: Task[];
}

const TaskContext = React.createContext({
  addTask: (task: Task) => {},
  onDone: (task: Task) => {},
  onDelete: (task: Task) => {},
  onSelect: (select: string) => {},
  state: {},
});

export class TaskContextProvider extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      tasks: [
        // { id: '1', task: 'Hoc React', status: false },
        // { id: '2', task: 'Hoc Angular', status: false },
        // { id: '3', task: 'Hoc Vue', status: false },
        // { id: '4', task: 'Hoc .Net', status: false },
      ],
      tasksFilter: [
        // { id: '1', task: 'Hoc React', status: false },
        // { id: '2', task: 'Hoc Angular', status: false },
        // { id: '3', task: 'Hoc Vue', status: false },
        // { id: '4', task: 'Hoc .Net', status: false },
      ],
      typeFilter: 'All',
    };
  }

  // Push data user to LocalStorage
  saveDataUser = () => {
    const dataUsers = { ...this.state };
    localStorage.setItem('dataUsers', JSON.stringify(dataUsers));
  };

  componentDidUpdate() {
    this.saveDataUser();
  }

  // Get data user from LocalStorage
  componentDidMount() {
    const dataUsers: any = localStorage.getItem('dataUsers');
    const stateUsers = JSON.parse(dataUsers);
    if (
      stateUsers == null ||
      stateUsers.tasks.length === 0 ||
      stateUsers.tasksFilter.length === 0
    ) {
      return;
    } else {
      this.setState(
        {
          tasksFilter: stateUsers.tasksFilter,
          tasks: stateUsers.tasks,
          typeFilter: 'All',
        },
        () => this.onSelect(this.state.typeFilter)
      );
    }
  }

  // Add Task
  addTask = (task: Task) => {
    this.setState(
      (prevTask: IAppState) => ({
        tasks: [...prevTask.tasks, task],
      }),
      () => this.onSelect(this.state.typeFilter)
    );

    this.setState(
      (prevTask: IAppState) => ({
        tasksFilter: [...prevTask.tasksFilter, task],
      }),
      () => this.onSelect(this.state.typeFilter)
    );
  };

  // Delete Task
  onDelete = (taskTarget: Task) => {
    this.setState(
      (prevTask: IAppState) => ({
        tasks: prevTask.tasks.filter((task: Task, index: number) => {
          return task.id !== taskTarget.id;
        }),
      }),
      () => this.onSelect(this.state.typeFilter)
    );
  };

  // Mark Task done
  onDone = (taskSelect: Task) => {
    let newTasks = this.state.tasks;
    newTasks.map((task: Task) => {
      if (taskSelect.id === task.id) {
        if (!task.status) {
          task.status = true;
        } else {
          task.status = false;
        }
      }
    });
    this.setState({ tasks: newTasks }, () => {
      this.onSelect(this.state.typeFilter);
    });
  };

  // Select type Task
  onSelect = (select: string) => {
    this.setState({ typeFilter: select });
    // Select All
    if (select === 'All') {
      this.setState(
        () => ({
          tasksFilter: this.state.tasks,
        }),
        () => this.saveDataUser()
      );
    }

    // Select Done
    if (select === 'Done') {
      this.setState(
        () => ({
          tasksFilter: this.state.tasks.filter((task) => {
            return task.status === true;
          }),
        }),
        () => this.saveDataUser()
      );
    }

    // Select To do
    if (select === 'To Do') {
      this.setState(
        () => ({
          tasksFilter: this.state.tasks.filter((task) => {
            return task.status === false;
          }),
        }),
        () => this.saveDataUser()
      );
    }
  };
  render() {
    return (
      <TaskContext.Provider
        value={{
          addTask: this.addTask,
          onDelete: this.onDelete,
          onSelect: this.onSelect,
          onDone: this.onDone,
          state: this.state,
        }}
      >
        {this.props.children}
      </TaskContext.Provider>
    );
  }
}

export default TaskContext;
