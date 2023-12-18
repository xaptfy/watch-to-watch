import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../store/middleware/action';
import {AppRoute} from '../../consts';

const Logo = ({centered, onMainPage}) => {
  const dispatch = useDispatch();

  const handleLogoClick = (evt) => {
    evt.preventDefault();
    if (!onMainPage) {
      dispatch(redirectToRoute(AppRoute.ROOT));
    }
  };

  return (
    <div className="logo" data-testid="logo">
      <a
        href={onMainPage ? `` : `/`}
        className={`logo__link ${centered ? `logo__link--light` : ``}`}
        onClick={handleLogoClick}
        data-testid="logo__link"
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  centered: PropTypes.bool,
  onMainPage: PropTypes.bool,
};

export {Logo};
