import React, { Fragment } from 'react';
import duix from 'duix';
import Login from './Login';
import SignUp from './SignUp';
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
            <h2>Endpoints Documentation</h2>
            <div className="Developers__block">
              <h3>Menu</h3>
              <ul>
                <li>
                  <a href="#baseUrl">Base URL</a>
                </li>
                <li>
                  <a href="#error">Error Responses</a>
                </li>
                <li>
                  <a href="#/v1/me">GET: /v1/me</a>
                </li>
                <li>
                  <a href="#/v1/spots/random">GET: /v1/spots/random</a>
                </li>
              </ul>
            </div>
            <div id="baseUrl" className="Developers__endpoint">
              <h3>Base URL</h3>

              <p>
                <input
                  readOnly
                  type="text"
                  value="https://us-central1-mari-a5cc7.cloudfunctions.net/api"
                />
              </p>

              <p>Example</p>
              <div className="Developers__js">
                {`const noFilterBaseUrl = 'https://us-central1-mari-a5cc7.cloudfunctions.net/api';
fetch(\`\${noFilterBaseUrl}/v1/spots/random\`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ${user.token}',
  },
});`}
              </div>
            </div>
            <div id="error" className="Developers__endpoint">
              <h3>Any Error Response</h3>

              <div className="Developers__json">
                {JSON.stringify(require('./error.json'), null, 2)}
              </div>
            </div>
            <div id="/v1/me" className="Developers__endpoint">
              <h3>GET: /v1/me</h3>

              <p>Retrieve your personal information.</p>

              <i>This endpoint ALSO consumes your API limits</i>

              <div className="Developers__json">
                {JSON.stringify(require('./v1.me.json'), null, 2)}
              </div>
            </div>
            <div id="/v1/spots/random" className="Developers__endpoint">
              <h3>GET: /v1/spots/random</h3>

              <p>Retrieve a random Spot.</p>

              <div className="Developers__json">
                {JSON.stringify(require('./v1.spots.random.json'), null, 2)}
              </div>
            </div>
          </>
        ) : (
          <Fragment>
            <Login />

            <hr />

            <SignUp />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Developers;
