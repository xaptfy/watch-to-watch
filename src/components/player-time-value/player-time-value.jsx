import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const PlayerTimeValue = ({timeElapsed}) => {

  return (
    <div className="player__time-value" data-testid="time-value">{dayjs.duration(timeElapsed, `seconds`).format(`H:mm:ss`)}</div>
  );
};

PlayerTimeValue.propTypes = {
  timeElapsed: PropTypes.number.isRequired,
};

export {PlayerTimeValue};
