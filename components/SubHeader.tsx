import React from 'react';

type SubHeaderProps = {
  children: string;
};

const SubHeader = (props: SubHeaderProps) => (
  <div>
    <h4>{props.children}</h4>
  </div>
);

export default SubHeader;
