import * as React from 'react';
import './style.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

export default function App() {
  const personName = {
    firstname: 'yogi',
    lastname: 'sinkar',
    age: 23,
  };

  const names = [
    { firstname: 'yogi', lastname: 'sinkar' },
    { firstname: 'jon', lastname: 'smith' },
    { firstname: 'test', lastname: 'yo' },
  ];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Greet name="Yogi" age={5} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={names} />
    </div>
  );
}
