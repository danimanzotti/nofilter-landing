import React, { Fragment } from 'react';
import duix from 'duix';
import Login from './Login';
import SignUp from './SignUp';
import Documentation from './Documentation';
import './styles.scss';

const Developers = () => {
  const user = duix.get('user');

  return (
    <div className="Developers">
      <div className="content-wrapper">
        {user ? (
          <>
            <h2>Welcome!</h2>
            <div className="Developers__block">
              <b>Your API Key</b>
              <input readOnly type="text" value={user.token} />
            </div>
            <div className="Developers__block">
              <b>Your limits</b>
              <br />
              {user.limit} calls/24hs
            </div>
            <br />
            Any question/help/feedback? Get in contact with{' '}
            <a href="mailto:hello@no-filter.app">hello@no-filter.app</a>
            <br />
            <br />
            <br />
          </>
        ) : (
          <Fragment>
            <Login />

            <hr />

            <SignUp />
          </Fragment>
        )}

        <Documentation />
      </div>
    </div>
  );
};

export default Developers;
