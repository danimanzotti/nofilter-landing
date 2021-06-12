import React from 'react';
import { useTranslation } from 'react-i18next';
import Download from '../Download';
import './styles.scss';

const JoinToday = () => {
  const { t } = useTranslation();

  return (
    <div className="JoinToday">
      <div className="content-wrapper">
        <h2>{t('Join NoFilter today')}!</h2>

        <div className="JoinToday__download-wrapper">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default JoinToday;
