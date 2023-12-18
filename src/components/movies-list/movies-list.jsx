import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {selectFilmsByGenre, selectFilmsLimit} from '../../store/reducers/data/selectors';
import {setShownFilmsCount} from '../../store/reducers/data/action';
import {filmPropValidation} from '../../consts';
import {MovieCard} from '../movie-card/movie-card';

const MoviesList = ({films, count, onFavoritesPage}) => {

  if (onFavoritesPage && !films) {
    return ``;
  }

  const filteredFilms = useSelector(selectFilmsByGenre);
  const filmsLimit = useSelector(selectFilmsLimit);
  const dispatch = useDispatch();

  const allFilms = (!films ? filteredFilms : films).map((film) => <MovieCard key={film.id} film={film} />);

  const filmsInList = allFilms.slice(0, (count ? count : filmsLimit));

  useEffect(() => {
    dispatch(setShownFilmsCount(allFilms.length));
  }, [allFilms.length]);

  return (
    <div className="catalog__movies-list" data-testid="movies-list">
      {filmsInList}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmPropValidation
  ),
  count: PropTypes.number,
  onFavoritesPage: PropTypes.bool,
};

export {MoviesList};
