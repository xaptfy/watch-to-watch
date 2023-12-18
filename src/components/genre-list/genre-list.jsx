import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGenres, selectGenre} from '../../store/reducers/data/selectors';
import {changeGenre, resetFilmsLimit} from '../../store/reducers/data/action';

const capitalizeFirstLetter = (string) => {
  return string && string[0].toUpperCase() + string.slice(1);
};

const GenreList = () => {
  const genres = useSelector(selectGenres);
  const selectedGenre = useSelector(selectGenre);
  const dispatch = useDispatch();

  const changeSelectedGenre = (evt) => {
    evt.preventDefault();
    dispatch(changeGenre(evt.target.textContent.toLowerCase()));
    dispatch(resetFilmsLimit());
  };

  const getGenre = (genre) => {

    return (
      <li key={genre}
        className={`catalog__genres-item ${selectedGenre === genre.toLowerCase() ? `catalog__genres-item--active` : ``}`}
      >
        <a href="" className="catalog__genres-link" onClick={changeSelectedGenre}>
          {capitalizeFirstLetter(genre)}
        </a>
      </li>
    );
  };

  return (
    <ul className="catalog__genres-list" data-testid="genres-list">
      {genres.map((genre) => getGenre(genre))}
    </ul>
  );
};

export {GenreList};
