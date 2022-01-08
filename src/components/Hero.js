import React from 'react';

const Hero = ({ children }) => {
  return (
    <div className="w-screen bg-center bg-cover bg-[url('../../public/img/cast-walking.jpeg')]">
      { children }
    </div>
  )
}

export default Hero
