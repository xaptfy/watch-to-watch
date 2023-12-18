import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {changeFilmFavoriteStatus} from '../../store/api-actions';
import {selectFavoriteStatusById} from '../../store/reducers/data/selectors';

const MyListButton = ({id}) => {
  const isFavorite = useSelector(selectFavoriteStatusById(id));
  const dispatch = useDispatch();

  const handleMyListButtonClick = (evt) => {
    evt.preventDefault();

    const status = isFavorite ? false : true;

    dispatch(changeFilmFavoriteStatus(id, status));
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={handleMyListButtonClick}
      data-testid="my-list-button">
      {isFavorite ?
        <svg viewBox="0 0 18 14" width={18} height={14} data-testid="in-favorite">
          <use xlinkHref="#in-list" />
        </svg>
        :
        <svg viewBox="0 0 19 20" width={19} height={20} data-testid="not-in-favorite">
          <use xlinkHref="#add" />
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export {MyListButton};
