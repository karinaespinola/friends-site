import React from 'react';
import Avatar from './Avatar';

const Gallery = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <Avatar characterName='chandler' />
      <Avatar characterName='monica' />
      <Avatar characterName='rachel' />
      <Avatar characterName='phoebe' />
      <Avatar characterName='ross' />
      <Avatar characterName='joey' />
    </div>
  )
}

export default Gallery
