import React, {useState} from 'react';
import {filmPropValidation, TabType} from '../../consts';
import {FilmOverviewTab} from '../film-overview-tab/film-overview-tab';
import {FilmDetailsTab} from '../film-details-tab/film-details-tab';
import {FilmReviewsTab} from '../film-reviews-tab/film-reviews-tab';

const getTabByType = (film, type = TabType.OVERVIEW) => {
  switch (type) {
    case TabType.OVERVIEW:
      return <FilmOverviewTab film={film} />;
    case TabType.DETAILS:
      return <FilmDetailsTab film={film} />;
    case TabType.REVIEWS:
      return <FilmReviewsTab film={film} />;
    default:
      return ``;
  }
};

const Tabs = ({film}) => {
  const [selectedTab, setSelectedTab] = useState(TabType.OVERVIEW);

  const selectTab = (evt) => {
    evt.preventDefault();
    setSelectedTab(evt.target.textContent.toUpperCase());
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav" data-testid="tabs-nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${selectedTab === TabType.OVERVIEW ? `movie-nav__item--active` : ``}`}
            data-testid="item-overview">
            <a href="#" className="movie-nav__link" onClick={selectTab}>Overview</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabType.DETAILS ? `movie-nav__item--active` : ``}`}
            data-testid="item-details">
            <a href="#" className="movie-nav__link" onClick={selectTab}>Details</a>
          </li>
          <li className={`movie-nav__item ${selectedTab === TabType.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={selectTab}>Reviews</a>
          </li>
        </ul>
      </nav>
      {getTabByType(film, selectedTab)}
    </div>
  );
};

Tabs.propTypes = {
  film: filmPropValidation,
};

export {Tabs};
