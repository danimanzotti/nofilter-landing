import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import c from 'classnames';
import JoinToday from 'components/JoinToday';
import Download from 'components/Download';
import actions from 'actions';
import './styles.scss';

const TABS = {
  MY_SPOTS: 'My Spots',
  MY_COLLECTIONS: 'Collections',
  MY_VISITED_SPOTS: 'Visited',
};

const PublicProfile = ({ match }) => {
  const username = match.params.username.toLowerCase();
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState({});
  const [currentTab, setCurrentTab] = useState(TABS.MY_SPOTS);

  useEffect(() => {
    window.location = `nofilter://user/${username}`;

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

  const handleClick = file => {
    setClicked({ ...clicked, [file]: true });
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
          {currentTab !== TABS.MY_SPOTS && <JoinToday />}
          {currentTab === TABS.MY_SPOTS && (
            <>
              <div className="PublicProfile__photos">
                {user.photos.length > 0 &&
                  user.photos.map(x => (
                    <div
                      key={x.file}
                      className={c('PublicProfile__photo', {
                        'PublicProfile__photo--clicked': clicked[x.file],
                      })}
                      onClick={() => handleClick(x.file)}
                      style={{
                        backgroundImage: `url(https://storage.googleapis.com/mari-a5cc7.appspot.com/photos/regular/${x.file})`,
                      }}
                    >
                      {clicked[x.file] && <Download />}
                    </div>
                  ))}
              </div>

              <JoinToday />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(PublicProfile);
