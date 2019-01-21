import React, { Component/*, createElement */} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Aaron', age: 30},
      {name: 'Kaity', age: 32},
      {name: 'Cam', age: 10},
      {name: 'Valor', age: 1},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked");
    //Dont do this: this.state.persons[1].name = 'Kaitlyn Wolfcale';
    this.setState({
      persons:[
        {name: 'Aaron Wolfcale', age: 30},
        {name: newName, age: 32},
        {name: 'Camryn Wolfcale', age: 10},
        {name: 'Valor Wolfcale', age: 1},
    ]
  }) 
  }

  nameChangeHandler = (event) => {
    //console.log("was clicked");
    //Dont do this: this.state.persons[1].name = 'Kaitlyn Wolfcale';
    this.setState({
      persons:[
        {name: 'Aaron Wolfcale', age: 30},
        {name: event.target.value, age: 32},
        {name: 'Camryn Wolfcale', age: 10},
        {name: 'Valor Wolfcale', age: 1},
    ]
  }) 
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
  }

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Kaity')}> My Hobbies: Bass </Person>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler} />
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        <Person 
            name={this.state.persons[3].name}        
            age={this.state.persons[3].age} />
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app dev</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;