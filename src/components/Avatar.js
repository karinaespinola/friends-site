import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RotateLoader } from 'react-spinners';

const Avatar = ({ characterName, source, onClickAvatar, loadingQuote, selectedCharacter }) => {
  const spinnerCss = `
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 45%;
  left: 45%;
`;
const [showSpinner, setShowSpinner] = useState(false);
const [loadingImage, setLoadingImage] = useState(true);

useEffect(() => {
  if(loadingQuote === false) {
    setShowSpinner(false);
  }
}, [loadingQuote])
const spinnerClass = (loadingQuote && showSpinner) || (loadingImage)  ? 'block' : 'hidden';
const imageClass = spinnerClass === 'block' ? 'hidden' : 'block';

 return (
    <div className='w-[100px] md:w-[130px] m-1'>
      <div 
        className={`w-[100px] md:w-[130px] h-[100px] md:h-[130px] bg-[#9C8CD4] relative rounded-full ${spinnerClass}`}
      >
        <RotateLoader color="#D2C385" css={spinnerCss} size={11}/>
      </div>
      <img 
        src={source} 
        alt={`${characterName} Avatar`}
        className={`rounded-full border-4 border-white ${imageClass}`}
        id={characterName} 
        onClick={(e) => { 
          onClickAvatar(e.target.id);
          setShowSpinner(true);
        }}
        onLoad={() => setLoadingImage(false)}
      />
      
    </div>
  )
}

Avatar.propTypes = {
  characterName: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Avatar
