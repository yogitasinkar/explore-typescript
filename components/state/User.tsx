import React, { useState } from 'react';

type UserProps = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<null | UserProps>(null);

  const handleLogin = () => {
    setUser({
      email: 'yogita@mail.com',
      name: 'yogita',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <p>
          {user.name} - {user.email}
        </p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default User;
