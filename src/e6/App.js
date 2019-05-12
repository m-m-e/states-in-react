import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthDate: {
        day: 10,
        month: 'December',
        year: 1815
      }
    }
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateDateDay = this.updateDateDay.bind(this);
  }

  updateFirstName(event) {
    const currentField = event.currentTarget;
    const input = currentField.value;
    this.setState((prevState, props) => ({
      firstName: prevState.firstName !== input ? input : prevState,      
    }));
  }

  updateLastName(event) {
    const currentField = event.currentTarget;
    const input = currentField.value;
    this.setState((prevState, props) => ({
      lastName: prevState.lastName !== input ? input : prevState,
    }));
  }

  updateDateDay(event) {
    const currentField = event.currentTarget;
    const input = currentField.value;
    const day = this.state.birthday.day;
    this.setState((prevState, props) => ({
      day: prevState.day !== input ? input : prevState,
    }));
  }

  render() {
    const {firstName, lastName, birthDate} = this.state;

    return (
      <div className="container">
        <form className="form">
          <label htmlFor="firstName" className="input-label">First name</label>
          <input id="firstName" className="input-box" placeholder={firstName} onChange={this.updateFirstName}/>

          <label htmlFor="lastName" className="input-label">Last name</label>
          <input id="lastName" className="input-box" placeholder={lastName} onChange={this.updateLastName}/>

          <label htmlFor="birthDate" className="input-label">Date of birth - Day</label>
          <input id="birthDate" className="input-box" placeholder={birthDate.day} onChange={this.updateDateDay}/>

          <label htmlFor="birthDate" className="input-label">Date of birth - Month</label>
          <input id="birthDate" className="input-box" placeholder={birthDate.month} />

          <label htmlFor="birthDate" className="input-label">Date of birth - Year</label>
          <input id="birthDate" className="input-box" placeholder={birthDate.year} />
        </form>

        <ul className="data-list">
          <li className="list-item">
            Your name is {firstName} {lastName}
          </li>
          <li className="list-item">
            Your birthday is {birthDate.day} {birthDate.month} {birthDate.year}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;