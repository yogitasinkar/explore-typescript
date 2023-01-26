import React from 'react';

type GreetProps = {
  name: string;
  age?: number; //optional props
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { age = 0 } = props; // default value to optional if needed
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Greeting {props.name}, {age}
        </h2>
      ) : (
        <h2>Greetings User </h2>
      )}
    </div>
  );
};

export default Greet;
