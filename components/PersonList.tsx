import React from 'react';

type PersonListProps = {
  // names: Array<{
  //   firstname: string;
  //   lastname: string;
  // }>;
  names: {
    firstname: string;
    lastname: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2>
          {name.firstname} {name.lastname}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
