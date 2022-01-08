import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({ bgColor, bgOpacity, titleColor, textColor, title, text }) => {
  const backgroundColor = `bg-${bgColor}${typeof bgOpacity !== 'undefined' ? `/${bgOpacity}` : ''}`;

  return (
    <section className={` ${backgroundColor} p-4`}>
      <h1>{ title }</h1>
      <p>{ text }</p>
    </section>
  )
}

InfoBox.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgOpacity: PropTypes.string,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

InfoBox.defaultProps = {
  titleColor: 'white',
  textColor: 'white'
}

export default InfoBox
