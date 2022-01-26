import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ characterName, source, onClickAvatar }) => {
  return (
    <div className='max-w-[20%] md:max-w-[15%] m-1'>
      <img 
        src={ source } 
        alt={ `${characterName} Avatar` }
        className='rounded-full border-4 border-white'
        id={ characterName } 
        onClick={(e) => { onClickAvatar(e.target.id); console.log(e.target);}}
      />
    </div>
  )
}

Avatar.propTypes = {
  characterName: PropTypes.string.isRequired
}

export default Avatar
