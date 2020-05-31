import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import useInterval from '../../hooks/useInterval';
import './styles.scss';

const TITLES = ['titlePhotographers', 'titleTravelers', 'titleInstagrammers'];

const Home = () => {
  const { t } = useTranslation();
  const [titleIndex, setTitleIndex] = useState(0);

  useInterval(() => {
    setTitleIndex(titleIndex + 1 === TITLES.length ? 0 : titleIndex + 1);
  }, 7000);
  /**
   * Function that registers a click on an outbound link in Analytics.
   * This function takes a valid URL string as an argument, and uses that URL string
   * as the event label. Setting the transport method to 'beacon' lets the hit be sent
   * using 'navigator.sendBeacon' in browser that support it.
   */
  const getOutboundLink = (url, event) => {
    window.gtag('event', event, {
      // 'event_category': 'category',
      // 'event_label': 'label',
      transport_type: 'beacon',
      event_callback: () => {
        document.location = url;
      },
    });

    if (event === 'download_app') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-991027828/eOy_CJ2jgboBEPTEx9gD',
      });
    }
  };

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   *
   * @returns {String}
   */
  const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone';
    }

    if (/android/i.test(userAgent)) {
      return 'Android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }

    return 'unknown';
  };

  const openDownload = () => {
    const device = getMobileOperatingSystem();

    if (device === 'iOS') {
      document.location = 'https://itunes.apple.com/us/app/nofilter-photo-spots/id1445583976';
    } else if (device === 'Android') {
      document.location = 'https://play.google.com/store/apps/details?id=app.no_filter.nofilter';
    }
  };

  return (
    <div className="Home">
      <div className="hero">
        <div className="empty"></div>

        <div className="image" onClick={openDownload}></div>

        <div className="content-wrapper">
          <div className="main-description">
            <h1 key={titleIndex}>
              <Trans i18nKey={TITLES[titleIndex]}>
                For <span>photographers</span> who want to discover the best photo spots{' '}
                <span>nearby</span>
              </Trans>
            </h1>

            <div className="app-store-buttons-wrapper">
              <div className="app-store-button apple-store">
                <a
                  href="https://itunes.apple.com/us/app/nofilter-photo-spots/id1445583976"
                  onClick={() =>
                    getOutboundLink(
                      'https://itunes.apple.com/us/app/nofilter-photo-spots/id1445583976',
                      'download_app'
                    )
                  }
                >
                  <img src="/img/apple-store.png" alt="App Store Button" />
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
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-image" onClick={openDownload}>
          <img src="/img/cell-phone-hero.gif" alt="cell phone" />
        </div>
      </div>

      <div className="features">
        <div className="content-wrapper">
          <div className="features-wrapper">
            <div className="features-item get-details">
              <i className="material-icons">add_a_photo</i>
              <h3>Quantity</h3>
              <div className="text">
                NoFilter contains <b>3,500 spots</b> around the world, and{' '}
                <b>~30 new photos are added every week</b>
              </div>
            </div>

            <div className="features-item create-collections">
              <i className="material-icons">no_photography</i>
              <h3>Quality</h3>
              <div className="text">
                Unlike other apps, all our photos go through a <b>deep quality control</b>. Less
                than 1% of the photos are approved
              </div>
            </div>

            <div className="features-item share-your-story">
              <i className="material-icons">local_offer</i>
              <h3>Price & Support</h3>
              <div className="text">
                Oh... Yeah... And it's <b>free</b>, and available for <b>Android and iOS</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-feature">
        <div className="images" onClick={openDownload}>
          <div className="home">
            <img src="/img/screenshot-home.png" alt="Home Screenshot" />
          </div>

          <div className="profile">
            <img src="/img/screenshot-profile.png" alt="Profile Screenshot" />
          </div>
        </div>

        <div className="content">
          <div className="social-feature-description">
            <h2>Our goal</h2>
            <div className="text">
              Help <b>photographers and travelers</b> who want to take <b>amazing pictures</b>, by
              providing an app where they can see cool photo locations, and travel destinations, all
              around the world.
              <br />
              <br />
              Salud! 🥂
            </div>
          </div>
        </div>
      </div>

      <div className="join-today">
        <div className="content-wrapper">
          <h2>Join NoFilter today</h2>

          <div className="app-store-buttons-wrapper">
            <div className="app-store-button apple-store">
              <a
                href="https://itunes.apple.com/us/app/nofilter-photo-spots/id1445583976"
                onClick={() =>
                  getOutboundLink(
                    'https://itunes.apple.com/us/app/nofilter-photo-spots/id1445583976',
                    'download_app'
                  )
                }
              >
                <img src="/img/apple-store.png" alt="App Store Button" />
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
