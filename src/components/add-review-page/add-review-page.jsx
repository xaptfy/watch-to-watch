import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectFilmById} from '../../store/reducers/data/selectors';
import {AppRoute} from '../../consts';
import {Logo} from '../logo/logo';
import {CommentForm} from '../comments-form/comments-form';
import {UserBlock} from '../user-block/user-block';
import {NotFoundPage} from '../not-found-page/not-found-page';

const AddReviewPage = () => {
  const id = +useParams().id;
  const reviewedFilm = useSelector(selectFilmById(id));

  if (!reviewedFilm) {
    return <NotFoundPage />;
  }

  const {
    title,
    backgroundImage,
    backgroundColor,
    posterImage,
  } = reviewedFilm;

  const style = {
    backgroundColor,
  };

  return (
    <section className="movie-card movie-card--full" style={style}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.ROOT} className="breadcrumbs__link" >{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${title} poster`} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <CommentForm id={id} />
      </div>
    </section>
  );
};

export {AddReviewPage};
