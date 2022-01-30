import React from 'react';
import Avatar from './Avatar';

const Gallery = ({ characters, onClickAvatar, loadingQuote, selectedCharacter }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      { characters.map((data, index) => {
        return <Avatar 
        characterName={ data.firstname } 
        source={ data.avatar } key={ index } 
        onClickAvatar={ onClickAvatar } 
        loadingQuote={ loadingQuote }
        selectedCharacter={ selectedCharacter }
        />
      }) 
      }
    </div>
  )
}

export default Gallery
