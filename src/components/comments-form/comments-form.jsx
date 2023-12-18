import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorMessage} from '../../store/reducers/user/action';
import {selectErrorMessage, selectFormDisabled} from '../../store/reducers/user/selectors';
import {sendReview} from '../../store/api-actions';
import {RATING_STARS_COUNT, ReviewTextValidation} from '../../consts';

const CommentForm = ({id}) => {
  const errorMessage = useSelector(selectErrorMessage);
  const isFormDisabled = useSelector(selectFormDisabled);
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });
  const [isCommentValid, setCommentValid] = useState(false);
  const dispatch = useDispatch();

  const styles = {
    display: `block`,
    width: `auto`,
    minHeight: `40px`,
    marginTop: `20px`,
    padding: `10px`,
    textAlign: `center`,
    color: `rgba(252, 7, 7, 0.7)`,
    border: `2px solid rgba(252, 7, 7, 0.5)`,
    borderRadius: `8px`,
  };

  const handleRatingChange = (evt) => {
    const {defaultValue} = evt.target;
    setReview({...review, rating: defaultValue});
  };

  const handleTextChange = (evt) => {
    const {value} = evt.target;
    setReview({...review, comment: value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendReview(id, review));
  };

  useEffect(() => {
    const isRatingValid = review.rating !== 0;
    const isTextValid = review.comment.length >= ReviewTextValidation.MIN_TEXT_LENGTH
                      && review.comment.length <= ReviewTextValidation.MAX_TEXT_LENGTH;

    setCommentValid(isRatingValid && isTextValid);
  }, [review]);

  useEffect(() => {
    return () => {
      dispatch(setErrorMessage(null));
    };
  }, []);

  const getStar = (value) => {

    return (
      <React.Fragment key={`star-${value}`}>
        <input className="rating__input" id={`star-${value}`} type="radio" name="rating" defaultValue={value} disabled={isFormDisabled} />
        <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
      </React.Fragment>
    );
  };

  const ratingStars = Array(RATING_STARS_COUNT).fill().map((_, i) => getStar(i));

  return (
    <form onSubmit={handleSubmit} className="add-review__form" data-testid={`add-review-form`}>
      <div className="rating">
        <div className="rating__stars" onChange={handleRatingChange}>
          {ratingStars}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          minLength={ReviewTextValidation.MIN_TEXT_LENGTH}
          maxLength={ReviewTextValidation.MAX_TEXT_LENGTH}
          onChange={handleTextChange}
          data-testid={`add-review-textarea`}
          disabled={isFormDisabled}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isCommentValid || isFormDisabled}>Post</button>
        </div>
      </div>
      {errorMessage && <p style={styles}>{`${errorMessage}. Please try again later`}</p>}
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export {CommentForm};
