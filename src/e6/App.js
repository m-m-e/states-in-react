import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: {
        day: 10,
        month: 'December',
        year: 1815
      }
    }
    this.updateDetails = this.updateDetails.bind(this);
    this.updateBirthdayDetails = this.updateBirthdayDetails.bind(this);
    // this.updateFirstName = this.updateFirstName.bind(this);
    // this.updateLastName = this.updateLastName.bind(this);
    // this.updateDateDay = this.updateDateDay.bind(this);
  }

  updateDetails(event) {
    const currentField = event.currentTarget;
    const key = currentField.id;
    const newValue = {};
    newValue[key] = currentField.value;

    this.setState(newValue);
  }

  updateBirthdayDetails(event) {
    const currentBField = event.currentTarget;
    const bKey = currentBField.id;
    const newBValue = currentBField.value;

    console.log(bKey, newBValue);

    /*
    Siempre que modifiquemos el estado
    dependiendo de un valor anterior usaremos
    esta fórmula.

    Aquí necesitamos crear un nuevo objeto
    birthDate que tenga, lo que tenía antes
    pero con una de las claves cambiadas
    y necesitamos hacer esto porque alguien podría
    estar cambiando otra a la vez y pisaríamos los estados
    */
    this.setState( (prevState) => {

      const newBirthDate = {...prevState.birthDate};
      newBirthDate[bKey] = newBValue;

      /*
        Esto lo puedes escribir tb así:
        
        const newBirthday = {...prevState.birthDate, [bKey]: newBValue};
        
      */

      return {birthDate: newBirthDate};
      
    } );
    
  }

  render() {
    const {firstName, lastName, birthDate} = this.state;

    return (
      <div className="container">
        <form className="form">
          <label htmlFor="firstName" className="input-label">First name</label>
          <input id="firstName" className="input-box" placeholder={firstName} onChange={this.updateDetails}/>

          <label htmlFor="lastName" className="input-label">Last name</label>
          <input id="lastName" className="input-box" placeholder={lastName} onChange={this.updateDetails}/>

          <label htmlFor="day" className="input-label">Date of birth - Day</label>
          <input id="day" className="input-box" placeholder={birthDate.day} onChange={this.updateBirthdayDetails}/>

          <label htmlFor="month" className="input-label">Date of birth - Month</label>
          <input id="month" className="input-box" placeholder={birthDate.month} onChange={this.updateDetails} />

          <label htmlFor="year" className="input-label">Date of birth - Year</label>
          <input id="year" className="input-box" placeholder={birthDate.year} onChange={this.updateDetails}/>
        </form>

        <ul className="data-list">
          <li className="list-item">
            Your name is {firstName !== '' ? firstName : 'JANE'} {lastName !== '' ? lastName : 'DOE'}
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


  // updateFirstName(event) {
  //   const currentField = event.currentTarget;
  //   const input = currentField.value;
  //   this.setState((prevState, props) => ({
  //     firstName: prevState.firstName !== input ? input : prevState,      
  //   }));
  // }

  // updateLastName(event) {
  //   const currentField = event.currentTarget;
  //   const input = currentField.value;
  //   this.setState((prevState, props) => ({
  //     lastName: prevState.lastName !== input ? input : prevState,
  //   }));
  // }

  // updateDateDay(event) {
  //   const currentField = event.currentTarget;
  //   const input = currentField.value;
  //   const day = this.state.birthday.day;
  //   this.setState((prevState, props) => ({
  //     day: prevState.day !== input ? input : prevState,
  //   }));