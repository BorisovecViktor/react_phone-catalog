import React, { useState } from 'react';
import cn from 'classnames';

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    images &&
    <>
      <ul className="gallery__thumbnails">
        {images.map((link, index) => (
          <li
            className={cn("gallery__thumbnail", {
              'gallery__thumbnail--active': index === currentImg
            })}
            key={link}
          >
            <a
              href="#!"
              className="gallery__link"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                setCurrentImg(index);
              }}
            >
              <img
                src={link}
                alt={`${title} - ${index + 1}`}
                className="gallery__img"
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="gallery__photo">
        <img
          className="gallery__img"
          src={images[currentImg]}
          alt={title}
        />
      </div>
    </>
  );
}

export default ProductGallery;
