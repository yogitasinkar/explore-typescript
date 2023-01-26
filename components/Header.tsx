import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = (props: HeaderProps) => (
  <div>
    <h4>{props.children}</h4>
  </div>
);

export default Header;
