import React from 'react';
import {filmPropValidation} from '../../consts';

const getRatingText = (rating) => {
  switch (true) {
    case (rating === 10):
      return `Awesome`;
    case (rating >= 8 && rating < 10):
      return `Very good`;
    case (rating >= 5 && rating < 8):
      return `Good`;
    case (rating >= 3 && rating < 5):
      return `Normal`;
    default:
      return `Bad`;
  }
};

const FilmOverviewTab = ({film}) => {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
  } = film;

  const starrings = starring.join(`, `);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.toString().replace(`.`, `,`)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingText(rating)}</span>
          <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starrings}</strong></p>
      </div>
    </>
  );
};

FilmOverviewTab.propTypes = {
  film: filmPropValidation,
};

export {FilmOverviewTab};
