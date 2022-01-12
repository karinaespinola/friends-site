import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ characterName }) => {
  return (
    <div className='max-w-[30%] md:max-w-[15%] m-1'>
      <img 
        src={`./img/character-avatars/${characterName}.jpg`} 
        alt={`${characterName} Avatar`}
        className='rounded-full border-4 border-white'
      />
    </div>
  )
}

Avatar.propTypes = {
  characterName: PropTypes.string.isRequired
}

export default Avatar
