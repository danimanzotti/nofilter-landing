import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Slider from '../../components/Slider';
import JoinToday from '../../components/JoinToday';
import useInterval from '../../hooks/useInterval';
import { getOutboundLink } from '../../utils/links';
import STATIC_EXAMPLES from './staticExamples';
import './styles.scss';

const TITLES = ['titlePhotographers', 'titleTravelers', 'titleInstagrammers'];

const NEAR_ME_STATUS = {
  INIT: 'init',
  GETTING_GEO: 'getting_geo',
  GETTING_SPOTS: 'getting_spots',
  SHOWING: 'showing',
};

const Home = () => {
  const { t } = useTranslation();
  const [titleIndex, setTitleIndex] = useState(0);
  const [nearMeStatus, setNearMeStatus] = useState(NEAR_ME_STATUS.INIT);
  const [nearMeSpots, setNearMeSpots] = useState([]);

  useInterval(() => {
    setTitleIndex(titleIndex + 1 === TITLES.length ? 0 : titleIndex + 1);
  }, 7000);

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
      document.location = 'https://apps.apple.com/app/nofilter-photo-spots/id1445583976';
    } else if (device === 'Android') {
      document.location = 'https://play.google.com/store/apps/details?id=app.no_filter.nofilter';
    }
  };

  const handleShowNearMe = async () => {
    window.gtag('event', 'show_near_me_click');

    if (!navigator.geolocation) {
      window.gtag('event', 'show_near_me_not_supported');
      window.alert(t('Geolocation is not supported by this browser'));
      return;
    }

    setNearMeStatus(NEAR_ME_STATUS.GETTING_GEO);

    navigator.geolocation.getCurrentPosition(
      async position => {
        let radius = 2;
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setNearMeStatus(NEAR_ME_STATUS.GETTING_SPOTS);

        let isOk = false;

        do {
          isOk = await getSpots({ lat, lng, radius });

          if (!isOk) {
            radius = radius * 5;
          }
        } while (!isOk && radius < 20000);
      },
      () => {
        setNearMeStatus(NEAR_ME_STATUS.INIT);
        window.gtag('event', 'show_near_me_error');
        window.alert(
          t(
            "Your browser doesn't want to give us your position :( try from your PC, or just download NoFilter in your phone and try it for real!"
          )
        );
      }
    );
  };

  const getSpots = async ({ lat, lng, radius }) => {
    const baseUrl = 'https://us-central1-mari-a5cc7.cloudfunctions.net';
    const r = await fetch(`${baseUrl}/api/v1/spots/radius/${radius}/${lat}/${lng}`);
    const { data } = await r.json();
    const spots = data.spots;

    if (spots.length === 8) {
      window.gtag('event', 'show_near_me_shown');
      setNearMeStatus(NEAR_ME_STATUS.SHOWING);

      spots.forEach(spot => {
        if (!spot.url.startsWith('http')) {
          spot.url = spot.url
            .replace('{1}', '&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=512&fit=max&ixid=')
            .replace('{2}', 'eyJhcHBfaWQiOjIzOTI1fQ&s=')
            .replace('{3}', '?ixlib=rb-0.3.5');

          spot.url = `https://images.unsplash.com/photo-${spot.url}`;
        }
      });

      setNearMeSpots(spots);

      return true;
    } else {
      return false;
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
                  href="https://apps.apple.com/app/nofilter-photo-spots/id1445583976"
                  onClick={() =>
                    getOutboundLink(
                      'https://apps.apple.com/app/nofilter-photo-spots/id1445583976',
                      'download_app'
                    )
                  }
                >
                  <img src="/img/apple-store.png" alt={t('App Store Button')} />
                  <div className="qr">
                    <img src="/img/qr-ios.png" alt={t('App Store QR Button')} />
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
                  <img src="/img/google-play.png" alt={t('Google Play Button')} />
                  <div className="qr">
                    <img src="/img/qr-android.png" alt={t('Google Play QR Button')} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-image" onClick={openDownload}>
          {/* <img src="/img/cell-phone-hero.gif" alt="cell phone" /> */}
          <video autoPlay loop muted playsInline>
            <source src="/img/app.webm" type="video/webm" />
            <source src="/img/app.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="sliders">
        <div className="content-wrapper">
          <h2>{t('Some examples')}</h2>

          <Slider items={STATIC_EXAMPLES} />

          {nearMeSpots.length > 0 && <Slider items={nearMeSpots} />}

          {nearMeStatus !== NEAR_ME_STATUS.SHOWING && (
            <button
              onClick={handleShowNearMe}
              type="button"
              disabled={nearMeStatus !== NEAR_ME_STATUS.INIT}
            >
              {
                {
                  [NEAR_ME_STATUS.INIT]: t('Show me some examples near me!'),
                  [NEAR_ME_STATUS.GETTING_GEO]: t('Getting your location...'),
                  [NEAR_ME_STATUS.GETTING_SPOTS]: t('Getting spots...'),
                }[nearMeStatus]
              }
            </button>
          )}

          {nearMeStatus === NEAR_ME_STATUS.SHOWING && (
            <h3>{t("Want to see more? Download the app. It's free!")}</h3>
          )}
        </div>
      </div>

      <JoinToday />

      <div className="features">
        <div className="content-wrapper">
          <div className="features-wrapper">
            <div className="features-item get-details">
              <i className="material-icons">add_a_photo</i>
              <h3>{t('Quantity')}</h3>
              <div className="text">
                <Trans i18nKey="featuresQuantity">
                  NoFilter contains <b>3,500 spots</b> around the world, and{' '}
                  <b>~30 new photos are added every week</b>
                </Trans>
              </div>
            </div>

            <div className="features-item create-collections">
              <i className="material-icons">no_photography</i>
              <h3>{t('Quality')}</h3>
              <div className="text">
                <Trans i18nKey="featuresQuality">
                  Unlike other apps, all our photos go through a <b>deep quality control</b>. Less
                  than 1% of the photos are approved
                </Trans>
              </div>
            </div>

            <div className="features-item share-your-story">
              <i className="material-icons">local_offer</i>
              <h3>{t('Price and Support')}</h3>
              <div className="text">
                <Trans i18nKey="featuresPrice">
                  Oh... Yeah... And it's <b>free</b>, and available for <b>Android and iOS</b>
                </Trans>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-feature">
        <div className="images" onClick={openDownload}>
          <div className="home">
            <img src="/img/screenshot-home.jpg" alt={t('Home Screenshot')} />
          </div>

          <div className="profile">
            <img src="/img/screenshot-profile.jpg" alt={t('Profile Screenshot')} />
          </div>
        </div>

        <div className="content">
          <div className="social-feature-description">
            <h2>{t('Our goal')}</h2>
            <div className="text">
              <Trans i18nKey="ourGoal">
                Help <b>photographers and travelers</b> who want to take <b>amazing pictures</b>, by
                providing an app where they can see cool photo locations, and travel destinations,
                all around the world.
              </Trans>
              <br />
              <br />
              Salud! 🥂
            </div>
          </div>
        </div>
      </div>

      <JoinToday />
    </div>
  );
};

export default Home;
