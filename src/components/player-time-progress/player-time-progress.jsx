import React from 'react';
import PropTypes from 'prop-types';

const PlayerTimeProgress = ({progressPercent}) => {

  return (
    <div className="player__time" data-testid="progress">
      <progress className="player__progress" value={progressPercent ? progressPercent : 0} max={100} />
      <div className="player__toggler" style={{left: `${progressPercent}%`}} data-testid="progress-toggler">Toggler</div>
    </div>
  );
};

PlayerTimeProgress.propTypes = {
  progressPercent: PropTypes.number.isRequired,
};

export {PlayerTimeProgress};
