import React from 'react';
import './App.css';

class SheepCounter extends React.Component {

  constructor(props) {
    super(props);

    this.sheepUrl = 'https://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png';
    this.state = {
      counter: 0,
    }

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    const counterIncrease = this.state.counter + 1;
    this.setState({
      counter: counterIncrease,
    })
  }

  render() {
    return (
      <div className="counter-box">

        <h1 className="number">{this.state.counter}</h1>
        <button className="btn" onClick={this.increaseCounter}>If you can't sleep, click here to count sheep</button>
        
      </div>

    )

  }
}

export default SheepCounter;