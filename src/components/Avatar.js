import React from 'react';
import PropTypes from 'prop-types';
import { RotateLoader } from 'react-spinners';

const Avatar = ({ characterName, source, onClickAvatar }) => {
  const spinnerCss = `
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 40%;
  left: 43%;
`;
  return (
    <div className='w-[100px] md:w-[130px] m-1'>
      <div className='h-full w-full bg-[#9C8CD4] relative rounded-full'>
        <RotateLoader color="#D2C385" css={spinnerCss} size={11}/>
      </div>      
      <img 
        src={source} 
        alt={`${characterName} Avatar`}
        className='rounded-full border-4 border-white'
        id={characterName} 
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
