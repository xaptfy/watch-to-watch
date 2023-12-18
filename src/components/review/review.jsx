import React from 'react';
import dayjs from 'dayjs';
import {reviewPropValidation} from '../../consts';

const Review = ({review}) => {
  const {
    user: {
      name,
    },
    rating,
    comment,
    date,
  } = review;

  return (
    <div className="review" data-testid="review">
      <blockquote className="review__quote" data-testid="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={dayjs(date).format(`YYYY-MM-DD`)}>
            {dayjs(date).format(`MMMM DD, YYYY`)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">
        {rating.toString().padEnd(3, `,0`).replace(`.`, `,`)}
      </div>
    </div>
  );
};

Review.propTypes = {
  review: reviewPropValidation,
};

export {Review};
