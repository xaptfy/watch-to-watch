import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import {selectAuthStatus} from '../../store/reducers/user/selectors';
import {AuthorizationStatus} from '../../consts';
import {Logo} from '../logo/logo';

const SignInPage = () => {
  const authorizationStatus = useSelector(selectAuthStatus);
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
          data-testid="sign-in-form"
        >
          {
            authorizationStatus === AuthorizationStatus.ERROR &&
              <div className="sign-in__message">
                <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
              </div>
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                autoComplete="on"
                data-testid="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
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

export {SignInPage};
