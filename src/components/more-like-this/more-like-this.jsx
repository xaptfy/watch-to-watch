import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectAllFilms} from '../../store/reducers/data/selectors';
import {SIMILAR_FILMS_MAX_COUNT} from '../../consts';
import {MoviesList} from '../movies-list/movies-list';

const MoreLikeThis = ({genre, selectedFilmId}) => {
  const films = useSelector(selectAllFilms);
  const similarFilms = films.filter((film) => (film.genre === genre) && (film.id !== selectedFilmId));

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title" data-testid="like-this">More like this</h2>
      <MoviesList films={similarFilms} count={SIMILAR_FILMS_MAX_COUNT}/>
    </section>
  );
};

MoreLikeThis.propTypes = {
  genre: PropTypes.string.isRequired,
  selectedFilmId: PropTypes.number,
};

export {MoreLikeThis};
