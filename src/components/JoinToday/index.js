import React from 'react';
import { getOutboundLink } from '../../utils/links';
import './styles.scss';

const JoinToday = () => {
  return (
    <div className="JoinToday">
      <div className="content-wrapper">
        <h2>Join NoFilter today</h2>

        <div className="app-store-buttons-wrapper">
          <div className="app-store-button apple-store">
            <a
              href="https://apps.apple.com/app/nofilter-photo-spots/id1445583976"
              onClick={() =>
                getOutboundLink(
                  'https://apps.apple.com/app/nofilter-photo-spots/id1445583976',
                  'download_app'
                )
              }
            >
              <img src="/img/apple-store.png" alt="App Store Button" />
              <div className="qr">
                <img src="/img/qr-ios.png" alt="App Store QR Button" />
              </div>
            </a>
          </div>

          <div className="app-store-button google-play">
            <a
              href="https://play.google.com/store/apps/details?id=app.no_filter.nofilter"
              onClick={() =>
                getOutboundLink(
                  'https://play.google.com/store/apps/details?id=app.no_filter.nofilter',
                  'download_app'
                )
              }
            >
              <img src="/img/google-play.png" alt="Google Play Button" />
              <div className="qr">
                <img src="/img/qr-android.png" alt="App Store QR Button" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinToday;