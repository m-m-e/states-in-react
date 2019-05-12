import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: {
        day: '',
        month: '',
        year: ''
      }
    }
    this.updateDetails = this.updateDetails.bind(this);
    this.updateBirthday = this.updateBirthday.bind(this);
  }

  updateDetails(event) {
    const currentField = event.currentTarget;
    const key = currentField.id;
    const value = currentField.value;
    const newValue = {};
    newValue[key] = value;

    console.log(newValue);
    this.setState(newValue);
  }

  updateBirthday(event) {
    const currentField = event.currentTarget;
    const key = currentField.id;
    const newValue = currentField.value;

    this.setState( (prevState) => {

      const newBirthDate = {...prevState.birthDate};
      newBirthDate[key] = newValue;

      return {birthDate: newBirthDate};

    } );
  }
  render() {
    const {firstName, lastName, birthDate} = this.state;

    return (
      <div className="container">
        <form className="form">
          <label htmlFor="firstName" className="input-label">First name</label>
          <input id="firstName" className="input-box" placeholder="Ada" onChange={this.updateDetails}/>

          <label htmlFor="lastName" className="input-label">Last name</label>
          <input id="lastName" className="input-box" placeholder="Lovelace" onChange={this.updateDetails}/>

          <label htmlFor="day" className="input-label">Date of birth - Day</label>
          <input id="day" className="input-box" placeholder="10" onChange={this.updateBirthday}/>

          <label htmlFor="month" className="input-label">Date of birth - Month</label>
          <input id="month" className="input-box" placeholder="December" onChange={this.updateBirthday} />

          <label htmlFor="year" className="input-label">Date of birth - Year</label>
          <input id="year" className="input-box" placeholder="1815" onChange={this.updateBirthday}/>
        </form>

        <ul className="data-list">
          <li className="list-item">
            Your name is {firstName !== '' ? firstName : 'Ada'} {lastName!== '' ? lastName : 'Lovelace'}
          </li>
          <li className="list-item">
            Your birthday is {birthDate.day !== '' ? birthDate.day : 10} {birthDate.month !== '' ? birthDate.month : 'December'} {birthDate.year !== '' ? birthDate.year : 1815}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;