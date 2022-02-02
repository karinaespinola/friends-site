import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => {
  return (
    <div 
    className='text-white text-2xl md:text-6xl italic text-center w-full'
    style={{ textShadow: '2px 0 10px black' }}
    >
      "{ quote }"
    </div>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired
}

export default Quote
