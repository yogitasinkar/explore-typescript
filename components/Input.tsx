import React from 'react';

type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = (props: InputProps) => (
  <input type="text" onChange={props.handleChange} value={props.value} />
);

export default Input;
