import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({ title, text }) => {
  
  return (
    <section className="bg-gray-800/80">
      <h1 className='text-white text-4xl'>{ title }</h1>
      <p className='text-white'>{ text }</p>
    </section>
  )
}

InfoBox.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default InfoBox
