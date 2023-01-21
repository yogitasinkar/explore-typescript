import React from 'react';

type PersonProps = {
  name: {
    firstname: string;
    lastname: string;
    age: number;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>
        {props.name.firstname}, {props.name.lastname}, {props.name.age}
      </h2>
    </div>
  );
};

export default Person;
