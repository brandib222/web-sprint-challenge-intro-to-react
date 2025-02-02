import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';

const StyledApp = styled.div
`
.App {
  width: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-flow: column wrap;
}
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp>
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(ch => {
          return <Character key={ch.mass} name={ch.name} />
        })
      }
    </div>
    </StyledApp>
  );
}

export default App;
