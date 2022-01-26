import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => {
  return (
    <div className='text-white shadow-sm text-3xl italic'>
      "{ quote }"
    </div>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired
}

export default Quote
