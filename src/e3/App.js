import React from 'react';

const time = new Date();

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    }

    this.updateClock = this.updateClock.bind(this);

    setInterval(this.updateClock, 1000);
  }
  
    updateClock() {
      const time = new Date();
      this.setState({
        time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
      });
    }

    render() {
      return (
        <p>{this.state.time}</p>
      )
    }
  }

export default Clock;