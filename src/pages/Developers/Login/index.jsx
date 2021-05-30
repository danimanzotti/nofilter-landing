import React, { useState } from 'react';
import duix from 'duix';
import actions from 'actions';
import './styles.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const { user } = await actions.developers.login({ email, password });

      if (user) {
        duix.set('user', user);
        window.location.reload();
      } else {
        window.alert('Wrong user/password');
      }
    } catch (error) {
      if (error.message) {
        window.alert(error.message);
      } else {
        window.alert('Unknown error');
      }
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
