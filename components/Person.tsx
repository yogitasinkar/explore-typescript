import React from 'react';
import { PersonProps } from './Person.types';

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
