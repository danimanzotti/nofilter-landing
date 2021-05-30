import React, { useState } from 'react';
import duix from 'duix';
import actions from 'actions';
import './styles.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegister = async e => {
    e.preventDefault();

    if (password.length < 6) {
      window.alert('Password should be >= 6 characters');
      return;
    }

    if (password !== password2) {
      window.alert('Both password have to be the same');
      return;
    }

    try {
      const { user } = await actions.developers.register({ email, password, password2 });

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
    <div className="SignUp">
      <form onSubmit={handleRegister}>
        <h2>Sign Up</h2>
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

        <input
          type="password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          placeholder="Repeat Password"
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
