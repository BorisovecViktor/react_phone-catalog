import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { banners } from '../helpers/banners';

const BannerSlider = () => {
  const bannerWidth = 1104;
  const frameSize = 1;
  const [activeBanner, setActiveBanner] = useState(0);
  const [position, setPosition] = useState(- activeBanner * bannerWidth);

  const handleNextBanner = () => {
    activeBanner === banners.length - 1
      ?
      setActiveBanner(0)
      :
      setActiveBanner(activeBanner + frameSize)
  }

  const handlePrevBanner = () => {
    activeBanner === 0
      ?
      setActiveBanner(banners.length - 1)
      :
      setActiveBanner(activeBanner - frameSize)
  }

  useEffect(() => {
    const nextFrame = setInterval(handleNextBanner, 5000);

    return () => clearInterval(nextFrame);
  });


  useEffect(() => {
    setPosition(- activeBanner * bannerWidth)
  },
    [activeBanner]
  )

  return (
    <div className="slider">
      <div className="slider__container">
        <button
          type="button"
          className="slider__button slider__button--left"
          onClick={handlePrevBanner}
        >
        </button>
        <ul
          className="slider__list"
          style={{ transform: `translateX(${position}px)` }}
        >
          {banners.map(banner => (
            <li
              className="slider__item"
              key={banner.id}
            >
              <img
                className="slider__img"
                src={banner.url}
                alt="banner"
              />
              <div className="slider__content">
                <h2 className="slider__title">
                  {banner.title}
                </h2>
                <p className="slider__description">
                  {banner.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="slider__button slider__button--right"
          onClick={handleNextBanner}
        >
        </button>
      </div>
      <div className="slider__dots">
        {banners.map(banner => (
          <button
            type="button"
            aria-label={`Got to ${banner.id + 1} slide`}
            key={banner.id}
            className={cn('slider__dot', {
              'slider__dot--active': activeBanner === banner.id
            })}
            onClick={() => setActiveBanner(banner.id)}
          >
          </button>
        ))}
      </div>
    </div>
  );
}

export default BannerSlider;
