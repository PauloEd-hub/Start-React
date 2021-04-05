import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>{
 const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age:17},
      {name: 'Stephanie', age: 36}
    ],
    otherStates: 'some other values'
  });

  const switchNameHandler = () => {
    //console.log("Was clikcked")
    // Dont do this state.persons[0].name = 'Maximilian'
    setPersonsState({
     persons:[
      {name: 'Maximilian', age: 28},
      {name: 'Manu', age:47},
      {name: 'Stephanie', age: 26}
     ],
     otherStates: personsState.otherStates
     })
  }
  

  return (
    <div className="App">
      <h2>Hello! I'm React App</h2>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person 
      name= {personsState.persons[0].name} 
      age= {personsState.persons[0].age} 
      />
      <Person 
      name={personsState.persons[1].name}
       age={personsState.persons[1].age}>My hobbie: Racing
       </Person>
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age}
      />
    </div>
  );
} 

export default App;