import React from 'react';

class ShowInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }

    this.onChangeListener = this.onChangeListener.bind(this);
  };
  onChangeListener(event) {
    this.setState({
      text: event.target.value,
    })
  };


  render() {
    return (
      <div className="container" onChange={this.onChangeListener}>
        <input type="text" className="input" />
        <p className="text">{this.state.text}</p>
      </div>
    );
  }
};

export default ShowInfo;