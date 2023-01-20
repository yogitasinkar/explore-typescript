import * as React from 'react';
import './style.css';
import Greet from './components/Greet';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Greet name="Yogi" age={5} isLoggedIn={false} />
    </div>
  );
}
