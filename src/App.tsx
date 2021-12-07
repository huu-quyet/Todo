import React, { lazy, Suspense } from 'react';
import Title from './UI/Title';
import AddTask from './Components/AddTask';
import CardList from './Components/CardList';
import TaskContext from './Store/TaskS-context';
import ErrorBoundaries from './ErrorBoundaries';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

import './App.css';
import Login from './FormikLoginForm';

export type Task = {
  id: string;
  task: string;
  status: boolean;
};

const LazyProfile = lazy(() => import('./Profile'));

class App extends React.Component {
  render() {
    return (
      <ErrorBoundaries>
        {/* <div className="container">
          <Title />
          <AddTask></AddTask>
          <CardList />
        </div> */}
        {/* <BrowserRouter>
          <div>
            Header
            <Link to="/profile/1">Profile 1</Link>
            <Link to="/profile/2">Profile 2</Link>
          </div>
          <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/profile">
                <LazyProfile />
              </Route>
            </Switch>
          </Suspense>
          <div>Footer</div>
        </BrowserRouter> */}
        <Login></Login>
      </ErrorBoundaries>
    );
  }
}

App.contextType = TaskContext;

export default App;
