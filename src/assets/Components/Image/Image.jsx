import React from 'react';

const Image = ({ src, alt, title }) => {
  return (
    <div className="wrapper">
      <img src={src} alt={alt} />
      <div className="overlay">Titel: {title}</div>
    </div>
  );
};

export default Image;
