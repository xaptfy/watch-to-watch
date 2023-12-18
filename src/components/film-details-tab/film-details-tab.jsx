import React from 'react';
import {filmPropValidation, MINUTES_IN_HOUR} from '../../consts';

const getFormatName = (name) => {
  return (
    <React.Fragment key={name}>
      {name} <br />
    </React.Fragment>
  );
};

const getFormatTime = (timeInMinutes) => {
  const hours = Math.floor(+timeInMinutes / MINUTES_IN_HOUR);
  const minutes = +timeInMinutes - hours * MINUTES_IN_HOUR;

  return `${hours}h ${minutes.toString().padStart(2, 0)}m`;
};

const FilmDetailsTab = ({film}) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released,
  } = film;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((name) => getFormatName(name))}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getFormatTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

FilmDetailsTab.propTypes = {
  film: filmPropValidation,
};

export {FilmDetailsTab};
