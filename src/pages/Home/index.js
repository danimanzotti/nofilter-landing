import React from 'react';

const Home = () => {
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
      event_callback: function() {
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
            <h1>Discover awesome photo spots all over the world.</h1>
            <div className="text">
              NoFilter helps you discover the best photo spots nearby and helps you to plan your
              coming trips.
            </div>

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
          <h2>With NoFilter you can</h2>

          <div className="features-wrapper">
            <div className="features-item get-details">
              <i className="material-icons">place</i>
              <h3>Get details</h3>
              <div className="text">
                Discover a spot that you love, and find out the exact location of where it was taken
                and access the specifics of the camera settings.
              </div>
            </div>

            <div className="features-item create-collections">
              <i className="material-icons">bookmark_border</i>
              <h3>Create collections</h3>
              <div className="text">
                Save spots you love in collections for creative inspiration or use them to spark
                future trips–and keep them at hands-reach.
              </div>
            </div>

            <div className="features-item share-your-story">
              <i className="material-icons">photo_camera</i>
              <h3>Share your story</h3>
              <div className="text">
                Keep a log of your travels by sharing your own photos and by marking spots that you
                have visited.
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
            <img src="/img/screenshot-profile.png" alt=" Profile Screenshot" />
          </div>
        </div>

        <div className="content">
          <div className="social-feature-description">
            <h2>Stay inspired and connected</h2>
            <div className="text">
              With a growing community, staying inspired will be easier than ever. Follow friends,
              photographers and travelers and don’t miss out on anything.
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
