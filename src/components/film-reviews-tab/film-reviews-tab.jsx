import React from 'react';
import {useSelector} from 'react-redux';
import {selectReviews, selectReviewsLoaded} from '../../store/reducers/data/selectors';
import {Review} from '../review/review';

const getReviews = (reviews) => reviews.map((review) => {
  return <Review key={review.id} review={review} />;
});

const FilmReviewsTab = () => {
  const reviewsForSelectedFilm = useSelector(selectReviews);
  const isReviewsLoaded = useSelector(selectReviewsLoaded);

  const style = {
    display: `flex`,
    paddingLeft: `50px`,
    alignItems: `center`,
    minHeight: `180px`,
    color: `rgba(0,0,0, 0.7)`,
    fontWeight: `bolder`,
  };

  if (!isReviewsLoaded) {
    return <p style={style}>Loading reviews...</p>;
  }

  if (isReviewsLoaded && !reviewsForSelectedFilm.length) {
    return <p style={style}>No comments to this movie</p>;
  }

  const firstColumnReviews = reviewsForSelectedFilm.length > 1 ?
    reviewsForSelectedFilm.slice(0, Math.floor(reviewsForSelectedFilm.length / 2))
    :
    reviewsForSelectedFilm;

  const secondColumnReviews = reviewsForSelectedFilm.slice(Math.ceil(reviewsForSelectedFilm.length / 2),
      reviewsForSelectedFilm.length);

  return (
    <div className="movie-card__reviews movie-card__row" data-testid="reviews">
      <div className="movie-card__reviews-col">
        {getReviews(firstColumnReviews)}
      </div>
      <div className="movie-card__reviews-col">
        {getReviews(secondColumnReviews)}
      </div>
    </div>
  );
};

export {FilmReviewsTab};
