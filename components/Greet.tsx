import React from 'react';

type GreetProps = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => (
  <div>
    {props.isLoggedIn ? (
      <h2>
        Greeting {props.name}, {props.age}
      </h2>
    ) : (
      <h2>Greetings User </h2>
    )}
  </div>
);

export default Greet;
