import * as React from 'react';
import './style.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import SubHeader from './components/SubHeader';
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

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
      <Greet name="Yogi" age={5} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={names} />
      <Status status="success" />
      <SubHeader>This is a sub heading</SubHeader>
      <Header>
        <div style={{ border: '1px solid black' }}>
          <h2>This is main Heading</h2>
          <SubHeader>This is a sub heading</SubHeader>
        </div>
      </Header>
      <Greet name="Yogi" isLoggedIn={true} />
      <Button
        label={'Click Me'}
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input
        value="yogi"
        handleChange={(event) => {
          console.log('New value', event);
        }}
      />
      <Container
        styles={{
          border: '1px solid blue',
          fontSize: '20px',
          padding: '10px',
        }}
      />
    </div>
  );
}
