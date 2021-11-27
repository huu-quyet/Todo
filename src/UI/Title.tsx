import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Let's add what you have to do!</h2>
        <p>
          Fill the input and click button or 'Enter' to add a new task into the
          list. To mark as completed, just click directly to the task.
        </p>
      </React.Fragment>
    );
  }
}

export default Title;
