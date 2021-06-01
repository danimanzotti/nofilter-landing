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
          <li>
            <a href="#/v1/spots/search/:query">GET: /v1/spots/search/:query</a>
          </li>
          <li>
            <a href="#/v1/spots/getByArea/:radius/:lat/:lng/:limit">
              GET: /v1/spots/getByArea/:radius/:lat/:lng/:limit
            </a>
          </li>
          <li>
            <a href="#/v1/spots/getNearest/:lat/:lng">GET: /v1/spots/getNearest/:lat/:lng</a>
          </li>
          <li>
            <a href="#/v1/spots/getById/:id">GET: /v1/spots/getById/:id</a>
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
fetch(\`\${noFilterBaseUrl}/v1/spots/getNearest/51.53123/-0.12412\`, {
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
      <div id="/v1/spots/search/:query" className="Documentation__endpoint">
        <h3>GET: /v1/spots/search/:query</h3>

        <p>Retrieve a list of Spots that matches with the search Query parameter.</p>

        <div className="Documentation__json">
          {JSON.stringify(require('./v1.spots.search.json'), null, 2)}
        </div>
      </div>
      <div id="/v1/spots/getByArea/:radius/:lat/:lng/:limit" className="Documentation__endpoint">
        <h3>GET: /v1/spots/getByArea/:radius/:lat/:lng/:limit</h3>

        <p>
          Retrieve a list of Spots that are present in the area provided (defined by Lat, Lng, and
          Radius).
        </p>

        <div className="Documentation__json">
          {JSON.stringify(require('./v1.spots.getByArea.json'), null, 2)}
        </div>
      </div>
      <div id="/v1/spots/getNearest/:lat/:lng" className="Documentation__endpoint">
        <h3>GET: /v1/spots/getNearest/:lat/:lng</h3>

        <p>Retrieve the Spot nearest to a defined coordinate.</p>

        <div className="Documentation__json">
          {JSON.stringify(require('./v1.spots.getNearest.json'), null, 2)}
        </div>
      </div>
      <div id="/v1/spots/getById/:id" className="Documentation__endpoint">
        <h3>GET: /v1/spots/getById/:id</h3>

        <p>Retrieve a Spot by ID</p>

        <div className="Documentation__json">
          {JSON.stringify(require('./v1.spots.getById.json'), null, 2)}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
