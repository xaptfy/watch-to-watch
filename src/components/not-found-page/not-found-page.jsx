import React from 'react';
import {Logo} from '../logo/logo';

const NotFoundPage = () => {
  const styles = {
    pageContent: {
      maxWidth: `360px`,
    },
    h1: {
      textAlign: `center`,
    },
    h2: {
      textAlign: `center`,
    },
    link: {
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      width: `auto`,
      height: `54px`,
      borderRadius: `8px`,
    },
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div className="sign-in user-page__content" style={styles.pageContent}>
        <h1 style={styles.h1}>404.</h1>
        <h2 style={styles.h2}>Page Not Found</h2>
        <a
          href="/"
          className="logo__link"
          style={styles.link}
        >
          <span>Go to Main page</span>
        </a>
      </div>
      <footer className="page-footer">
        <Logo centered />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export {NotFoundPage};
