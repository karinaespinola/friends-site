import React from 'react';
import PropTypes from 'prop-types';
import { RotateLoader } from 'react-spinners';

const Avatar = ({ characterName, source, onClickAvatar }) => {
  return (
    <div className='max-w-[20%] md:max-w-[10%] m-1'>
      <div className='bg-[#9C8CD4] h-full w-full flex align-middle justify-center'>
        <div><RotateLoader color="#D2C385" /></div>
      </div>
      <img 
        src={ source } 
        alt={ `${characterName} Avatar` }
        className='rounded-full border-4 border-white'
        id={ characterName } 
        onClick={(e) => { onClickAvatar(e.target.id);}}
      />
    </div>
  )
}

Avatar.propTypes = {
  characterName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Avatar
