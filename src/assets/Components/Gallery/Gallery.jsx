import React, { useEffect } from 'react';
import Image from '../Image/Image';
import { imageData } from '../ImageData/ImageData';
import './Gallery.scss';

const Gallery = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img');

    images.forEach((image) => {
      image.addEventListener('mouseover', () => {
        image.style.transform = 'rotateY(190deg)';
        image.style.transition = '3s';
        image.style.transitionTimingFunction = 'ease-in-out';
        image.style.filter = 'grayscale(90%) contrast(0.1)';
        const titleElement = image.nextElementSibling;
        titleElement.style.display = 'block';
      });
      image.addEventListener('mouseout', () => {
        image.style.transform = 'rotateY(0deg)';
        image.style.transition = '3s';
        image.style.transitionTimingFunction = 'ease-in-out';
        image.style.filter = 'grayscale(0%)';
        const titleElement = image.nextElementSibling;
        titleElement.style.display = 'none';
      });
    });
  }, []);
  return (
    <figure>
      {imageData.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          title={image.title}
          className={image.className}
        />
      ))}
    </figure>
  );
};

export default Gallery;
