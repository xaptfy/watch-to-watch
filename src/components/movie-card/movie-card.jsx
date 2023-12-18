import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {redirectToRoute} from '../../store/middleware/action';
import {filmPropValidation, PLAY_DELAY_IN_MS} from '../../consts';
import {MemoizedVideoPlayer} from '../video-player/video-player';

const MovieCard = ({film}) => {
  const {id} = film;
  const [isPlaying, setPlaying] = useState(null);
  const dispatch = useDispatch();
  const videoPlayerRef = useRef();
  const playerTimeoutRef = useRef();

  const handleMouseEnter = () => {
    playerTimeoutRef.current = setTimeout(() => {
      setPlaying(true);
    }, PLAY_DELAY_IN_MS);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    window.clearTimeout(playerTimeoutRef.current);
  };

  const handleCardClick = () => {
    dispatch(redirectToRoute(`/films/${id}`));
  };

  useEffect(() => {
    if (isPlaying === null) {
      return;
    }

    if (isPlaying) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.load();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      window.clearTimeout(playerTimeoutRef.current);
      playerTimeoutRef.current = null;
    };
  }, []);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handleCardClick()}
      data-testid="movie-card">
      <div className="small-movie-card__image">
        <MemoizedVideoPlayer id={id} videoPlayerRef={videoPlayerRef} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
};


MovieCard.propTypes = {
  film: filmPropValidation,
};

export {MovieCard};
