import React from 'react';
import {useSelector} from 'react-redux';
import {selectPromo} from '../../store/reducers/data/selectors';
import {Logo} from '../logo/logo';
import {MyListButton} from '../my-list-button/my-list-button';
import {PlayMovieButton} from '../play-movie-button/play-movie-button';
import {UserBlock} from '../user-block/user-block';

const Promo = () => {
  const promo = useSelector(selectPromo);
  const {
    id,
    title,
    genre,
    released,
    posterImage,
    backgroundImage,
  } = promo;

  return (
    <section className="movie-card" data-testid="promo">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo onMainPage />
        <UserBlock />
      </header>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={title} width={218} height={327} />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>
            <div className="movie-card__buttons">
              <PlayMovieButton id={id}/>
              <MyListButton id={id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {Promo};
