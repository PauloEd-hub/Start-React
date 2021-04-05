import './App.css';
import Person from './Person/Person'

function App() {
  const state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age:17},
      {name: 'Stephanie', age: 36}

    ]
  }
  return (
    <div className="App">
      <h2>Hello! I'm React App</h2>
      <p>This is really working</p>
      <button>Switch name</button>
      <Person name= {state.persons[0].name} age= {state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>My hobbie: Racing</Person>
      <Person name={state.persons[2].name} age={state.persons[2].age}/>
    </div>
  );
} 

export default App;
