import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isBlue = true;
    this.state = {
      color: 'blue',
    }
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    // this.setState((prevState, props) => {
    //   let newColor;
    //   if (prevState.color === 'blue') {
    //     newColor = 'red';
    //   } else {
    //     newColor = 'blue';
    //   }

    //   return {
    //     color: newColor,
    //   };
    // })

    this.setState((prevState, props) => ({
      color: prevState.color === 'blue' ? 'red' : 'blue',
    }));
  }

  render() {
    const {color} = this.state;

    return (
      <div className={`box box-${color}`} onClick={this.handleColor}></div>
    );
  }
}

export default App;