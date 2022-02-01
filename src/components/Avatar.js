import React from 'react';
import PropTypes from 'prop-types';
import { RotateLoader } from 'react-spinners';

const Avatar = ({ characterName, source, onClickAvatar, loadingQuote }) => {
  const spinnerCss = `
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 45%;
  left: 45%;
`;
  return (
    <div className='w-[100px] md:w-[130px] m-1'>
      {loadingQuote
      ? <div className='w-[100px] md:w-[130px] h-[100px] md:h-[130px] bg-[#9C8CD4] relative rounded-full'>
        <RotateLoader color="#D2C385" css={spinnerCss} size={11}/>
      </div>
      : <img 
        src={source} 
        alt={`${characterName} Avatar`}
        className='rounded-full border-4 border-white'
        id={characterName} 
        onClick={(e) => { onClickAvatar(e.target.id);}}
      />
      }
    </div>
  )
}

Avatar.propTypes = {
  characterName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Avatar
