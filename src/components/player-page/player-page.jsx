import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {redirectToRoute} from '../../store/middleware/action';
import {fetchFilms} from '../../store/api-actions';
import {selectFilmsLoaded} from '../../store/reducers/data/selectors';
import {HUNDRED_PERCENT, REFRESH_INTERVAL_IN_SECOND} from '../../consts';
import {PlayerTimeProgress} from '../player-time-progress/player-time-progress';
import {PlayerTimeValue} from '../player-time-value/player-time-value';
import {MemoizedVideoPlayer} from '../video-player/video-player';
import {LoadingScreen} from '../loading-screen/loading-screen';

const PlayerPage = () => {
  const id = +useParams().id;
  const isFilmsLoaded = useSelector(selectFilmsLoaded);
  const videoPlayerRef = useRef();
  const refreshIntervalRef = useRef();
  const [isPlaying, setPlaying] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const dispatch = useDispatch();

  const onFilmLoaded = useCallback(() => {
    videoPlayerRef.current.play();

    setProgressPercent(() => Math.floor(videoPlayerRef.current.currentTime * HUNDRED_PERCENT / videoPlayerRef.current.duration));
    setTimeElapsed(() => Math.floor(videoPlayerRef.current.duration - videoPlayerRef.current.currentTime));
  }, []);

  const handlePlayPauseButtonClick = (evt) => {
    evt.preventDefault();

    if (isPlaying) {
      videoPlayerRef.current.pause();
      setPlaying(false);
    } else {
      videoPlayerRef.current.play();
      setPlaying(true);
    }
  };

  const handleFullScreenButtonClick = (evt) => {
    evt.preventDefault();

    videoPlayerRef.current.requestFullscreen();
  };

  const handleExitButtonClick = (evt) => {
    evt.preventDefault();

    videoPlayerRef.current.pause();
    setPlaying(false);
    dispatch(redirectToRoute(`/films/${id}`));
  };

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
    }
  }, [isFilmsLoaded]);

  useEffect(() => {
    if (isFilmsLoaded) {
      refreshIntervalRef.current = setInterval(() => {

        setProgressPercent(() => Math.floor(videoPlayerRef.current.currentTime * HUNDRED_PERCENT / videoPlayerRef.current.duration));
        setTimeElapsed(() => Math.floor(videoPlayerRef.current.duration - videoPlayerRef.current.currentTime));
      }, REFRESH_INTERVAL_IN_SECOND);
    }

    return () => {
      window.clearInterval(refreshIntervalRef.current);
    };
  }, [timeElapsed]);

  if (!isFilmsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="player">
      <MemoizedVideoPlayer id={id} videoPlayerRef={videoPlayerRef} onFilmLoaded={onFilmLoaded} onPlayerPage />
      <button
        type="button"
        className="player__exit"
        onClick={handleExitButtonClick}
      >
          Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <PlayerTimeProgress progressPercent={progressPercent} />
          <PlayerTimeValue timeElapsed={timeElapsed} />
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayPauseButtonClick}
          >
            {isPlaying ?
              <svg viewBox="0 0 14 21" width={14} height={21}>
                <use xlinkHref="#pause" />
              </svg>
              :
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
            }
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export {PlayerPage};
