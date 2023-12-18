import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {selectFilmById, selectFilmsLoaded} from '../../store/reducers/data/selectors';
import {selectAuthStatus} from '../../store/reducers/user/selectors';
import {fetchFilms, fetchReviewsById} from '../../store/api-actions';
import {redirectToRoute} from '../../store/middleware/action';
import {AuthorizationStatus} from '../../consts';
import {Logo} from '../logo/logo';
import {Tabs} from '../tabs/tabs';
import {MoreLikeThis} from '../more-like-this/more-like-this';
import {NotFoundPage} from '../not-found-page/not-found-page';
import {UserBlock} from '../user-block/user-block';
import {MyListButton} from '../my-list-button/my-list-button';
import {PlayMovieButton} from '../play-movie-button/play-movie-button';
import {LoadingScreen} from '../loading-screen/loading-screen';

const FilmPage = () => {
  const id = +useParams().id;
  const isFilmsLoaded = useSelector(selectFilmsLoaded);
  const selectedFilm = useSelector(selectFilmById(id));
  const authorizationStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
    }
  }, [isFilmsLoaded]);

  useEffect(() => {
    dispatch(fetchReviewsById(id));
  }, [id]);

  if (!isFilmsLoaded) {
    return <LoadingScreen />;
  }

  if (!selectedFilm) {
    return <NotFoundPage />;
  }


  const {
    title,
    genre,
    released,
    backgroundImage,
    backgroundColor,
    posterImage,
  } = selectedFilm;

  const style = {
    backgroundColor,
  };

  const handleAddReviewClick = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(`/films/${id}/review`));
  };

  return (
    <>
      <section className="movie-card movie-card--full" style={style}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <UserBlock />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <PlayMovieButton id={id}/>
                <MyListButton id={id} />
                {authorizationStatus === AuthorizationStatus.AUTH
                  ?
                  <a href="add-review.html" className="btn movie-card__button" onClick={handleAddReviewClick}>
                    Add review
                  </a>
                  : ``
                }
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${title} poster`} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <Tabs film={selectedFilm}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLikeThis genre={genre} selectedFilmId={id}/>
        <footer className="page-footer">
          <Logo centered/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export {FilmPage};
