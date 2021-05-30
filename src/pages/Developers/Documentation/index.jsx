import React from 'react';
import './styles.scss';

const Documentation = ({ user }) => {
  return (
    <div className="Documentation">
      <h2>Endpoints Documentation</h2>
      <div className="Documentation__block">
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
      <div id="baseUrl" className="Documentation__endpoint">
        <h3>Base URL</h3>

        <p>
          <input
            readOnly
            type="text"
            value="https://us-central1-mari-a5cc7.cloudfunctions.net/api"
          />
        </p>

        <p>Example</p>
        <div className="Documentation__js">
          {`const noFilterBaseUrl = 'https://us-central1-mari-a5cc7.cloudfunctions.net/api';
fetch(\`\${noFilterBaseUrl}/v1/spots/random\`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ${user ? user.token : 'here-your-token'}',
  },
});`}
        </div>
      </div>
      <div id="error" className="Documentation__endpoint">
        <h3>Any Error Response</h3>

        <div className="Documentation__json">
          {JSON.stringify(require('./error.json'), null, 2)}
        </div>
      </div>
      <div id="/v1/me" className="Documentation__endpoint">
        <h3>GET: /v1/me</h3>

        <p>Retrieve your personal information.</p>

        <i>This endpoint ALSO consumes your API limits</i>

        <div className="Documentation__json">
          {JSON.stringify(require('./v1.me.json'), null, 2)}
        </div>
      </div>
      <div id="/v1/spots/random" className="Documentation__endpoint">
        <h3>GET: /v1/spots/random</h3>

        <p>Retrieve a random Spot.</p>

        <div className="Documentation__json">
          {JSON.stringify(require('./v1.spots.random.json'), null, 2)}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
