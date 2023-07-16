import React from 'react';
import './App.css';

function App() {
  let name: string;
  let age: number;
  let address: string[];
  const country = "Nigeria";

  let Person: Object;

  interface Person {
    name: string;
    age: number;
    nickname: string;
  }

  let people: Person[];

  let getPeople: () => Person[] // function with no arguments

  let createPerson: (person: Person) => void

  let getPersonById: (personId: number) => Person;

  return (
    <div className="App">
    <h1>Welcome to typescript</h1>
    </div>
  );
}

export default App;
