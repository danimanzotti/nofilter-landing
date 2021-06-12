import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import c from 'classnames';
import NeedAccess from 'components/NeedAccess';
import Download from 'components/Download';
import actions from 'actions';
import './styles.scss';

const TABS = {
  MY_SPOTS: 'My Spots',
  MY_COLLECTIONS: 'Collections',
  MY_VISITED_SPOTS: 'Visited',
};

const PublicProfile = ({ match }) => {
  const { t } = useTranslation();
  const username = match.params.username;
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [currentTab, setCurrentTab] = useState(TABS.MY_SPOTS);

  useEffect(() => {
    (async () => {
      try {
        const { user } = await actions.users.get({ username });

        if (user) {
          setUser(user);
        }
      } catch (error) {
        //
      }

      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsClicked(true);
  };

  if (isLoading) {
    return (
      <div className="PublicProfile">
        <div className="content-wrapper">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="PublicProfile">
        <div className="content-wrapper">404: @{user.username} user not found</div>
      </div>
    );
  }

  return (
    <div className="PublicProfile">
      <div className="content-wrapper">
        <div className="PublicProfile__header">
          <div
            className="PublicProfile__avatar"
            style={{ backgroundImage: `url(${user.avatarUrl})` }}
          >
            {!user.avatarUrl && user.username[0].toUpperCase()}
          </div>

          <div className="PublicProfile__data">
            <div className="PublicProfile__username">@{user.username}</div>
            <div className="PublicProfile__followers">
              {Object.values(user.followers).length} followers -{' '}
              {Object.values(user.following).length} following
            </div>
          </div>
        </div>

        <Download />

        <div className="PublicProfile__tabs">
          <div
            className={c('PublicProfile__tab', { active: currentTab === TABS.MY_SPOTS })}
            onClick={() => setCurrentTab(TABS.MY_SPOTS)}
          >
            {TABS.MY_SPOTS}
          </div>

          <div
            className={c('PublicProfile__tab', { active: currentTab === TABS.MY_COLLECTIONS })}
            onClick={() => setCurrentTab(TABS.MY_COLLECTIONS)}
          >
            {TABS.MY_COLLECTIONS}
          </div>

          <div
            className={c('PublicProfile__tab', { active: currentTab === TABS.MY_VISITED_SPOTS })}
            onClick={() => setCurrentTab(TABS.MY_VISITED_SPOTS)}
          >
            {TABS.MY_VISITED_SPOTS}
          </div>
        </div>

        <div className="PublicProfile__content">
          {currentTab !== TABS.MY_SPOTS && <NeedAccess />}
          {currentTab === TABS.MY_SPOTS && (
            <>
              <div className="PublicProfile__photos">
                {user.photos.length > 0 &&
                  !isClicked &&
                  user.photos.map(x => (
                    <div
                      key={x.file}
                      className="PublicProfile__photo"
                      onClick={handleClick}
                      style={{
                        backgroundImage: `url(https://storage.googleapis.com/mari-a5cc7.appspot.com/photos/regular/${x.file})`,
                      }}
                    ></div>
                  ))}
              </div>

              {isClicked && <div className="PublicProfile__join">{t('Join NoFilter today')}!</div>}

              <Download />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PublicProfile);
