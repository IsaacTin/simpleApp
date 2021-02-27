import './App.css';
import React, {useState} from 'react';
import Dogs from './data/dogs.json';
import Cats from './data/cats.json';
import Squirrels from './data/squirrels.json';
import Rabbits from './data/rabbits.json';

function App() {
  const[state, setState] = useState("Dogs");
  const[list, setList] = useState(Dogs.dogs);

  const changeState = (newState, newList) => {
    setState(newState);
    setList(newList);
  }

  return (
    <div className="App">
        <div className="buttons-bar">
          <button className="button" onClick={() => changeState("Dogs", Dogs.dogs)}> Dogs </button>
          <button className="button" onClick={() => changeState("Cats", Cats.cats)}> Cats </button>
          <button className="button" onClick={() => changeState("Squirrels", Squirrels.squirrels)}> Squirrels </button>
          <button className="button" onClick={() => changeState("Rabbits", Rabbits.rabbits)}> Rabbits </button>
        </div>
        <h1>{state}</h1>
        <div className="container">
          {list.map(({id, src}) => <img alt="sorry" className="photos" key = {id} src = {require(`${src}`).default}/>)}
        </div>
    </div>
  );
}

export default App;
