import React from 'react';

type StatusProps = {
  status: 'loading' | 'success' | 'failure';
};

const Status = (props: StatusProps) => (
  <div>
    <h2>Status - {props.status} </h2>
  </div>
);

export default Status;
