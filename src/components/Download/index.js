import React from 'react';
import { useTranslation } from 'react-i18next';
import { getOutboundLink, catchQRDownloadEvent } from '../../utils/links';
import './styles.scss';

const Download = () => {
  const { t } = useTranslation();

  return (
    <div className="Download">
      <div className="Download__button apple-store" {...catchQRDownloadEvent}>
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

      <div className="Download__button google-play" {...catchQRDownloadEvent}>
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
  );
};

export default Download;
