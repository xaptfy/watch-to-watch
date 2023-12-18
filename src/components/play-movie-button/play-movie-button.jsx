import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../store/middleware/action';

const PlayMovieButton = ({id}) => {
  const dispatch = useDispatch();

  const handlePlayButtonClick = (evt) => {
    evt.preventDefault();

    dispatch(redirectToRoute(`/player/${id}`));
  };

  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={handlePlayButtonClick}
      data-testid="play-button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayMovieButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export {PlayMovieButton};
