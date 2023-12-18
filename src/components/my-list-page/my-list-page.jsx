import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavorites} from '../../store/api-actions';
import {selectFavorites, selectFavoritesLoaded} from '../../store/reducers/data/selectors';
import {LoadingScreen} from '../loading-screen/loading-screen';
import {Logo} from '../logo/logo';
import {MoviesList} from '../movies-list/movies-list';
import {UserBlock} from '../user-block/user-block';

const MyListPage = () => {
  const favoriteFilms = useSelector(selectFavorites);
  const isFavoritesLoaded = useSelector(selectFavoritesLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFavoritesLoaded) {
      dispatch(fetchFavorites());
    }
  }, [isFavoritesLoaded]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock onMyListPage />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={favoriteFilms}/>
      </section>
      <footer className="page-footer">
        <Logo centered />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export {MyListPage};
