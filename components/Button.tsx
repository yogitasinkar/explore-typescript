import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  label: string;
};

const Button = (props: ButtonProps) => (
  <div>
    <button onClick={(event) => props.handleClick(event, 1)}>
      {props.label}
    </button>
  </div>
);

export default Button;
