import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage} from '../main-page/main-page';
import {SignInPage} from '../sign-in-page/sign-in-page';
import {MyListPage} from '../my-list-page/my-list-page';
import {FilmPage} from '../film-page/film-page';
import {AddReviewPage} from '../add-review-page/add-review-page';
import {PlayerPage} from '../player-page/player-page';
import {NotFoundPage} from '../not-found-page/not-found-page';
import {PrivateRoute} from '../private-route/private-route';
import {AppRoute} from '../../consts';

const App = () => {

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPage />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignInPage />
      </Route>
      <PrivateRoute exact path={AppRoute.MY_LIST} render={() => <MyListPage />}/>
      <Route exact path={AppRoute.FILM_INFO}>
        <FilmPage />
      </Route>
      <PrivateRoute exact path={AppRoute.FILM_ADD_REVIEW} render={() => <AddReviewPage />}/>
      <Route exact path={AppRoute.FILM_PLAYER}>
        <PlayerPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export {App};
