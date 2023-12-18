import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilms, fetchPromo} from '../../store/api-actions';
import {selectFilmsLoaded, selectPromoLoaded} from '../../store/reducers/data/selectors';
import {MoviesList} from '../movies-list/movies-list';
import {Logo} from '../logo/logo';
import {LoadingScreen} from '../loading-screen/loading-screen';
import {GenreList} from '../genre-list/genre-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {Promo} from '../promo/promo';

const MainPage = () => {
  const isFilmsLoaded = useSelector(selectFilmsLoaded);
  const isPromoLoaded = useSelector(selectPromoLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
    }
  }, []);

  useEffect(() => {
    if (!isPromoLoaded) {
      dispatch(fetchPromo());
    }
  }, []);

  if (!isFilmsLoaded || !isPromoLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <Promo />
      <div className="page-content">
        <section className="catalog" data-testid="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <MoviesList />
          <ShowMoreButton />
        </section>
        <footer className="page-footer">
          <Logo onMainPage centered />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export {MainPage};
