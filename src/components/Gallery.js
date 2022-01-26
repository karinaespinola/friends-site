import React from 'react';
import Avatar from './Avatar';

const Gallery = ({ characters }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      { characters.map((data, index) => {
        return <Avatar characterName={data.firstname} source={data.avatar} key={index} />
      }) 
      }
    </div>
  )
}

export default Gallery
