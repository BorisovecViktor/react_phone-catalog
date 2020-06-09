import React from 'react';
import { Link } from 'react-router-dom';

const Category: React.FC<Category> = ({ title, link, count }) => {
  return (
    <Link
      to={`/${link}`}
      className="categories__link"
    >
      <div className="categories__photo">
        <img
          src={`./img/categories/${link}.jpg`}
          className="categories__img"
          alt={title}
        />
      </div>
      <h3 className="categories__title">{title}</h3>
      <span className="categories__count">
        {`${count} models`}
      </span>
    </Link>
  );
}

export default Category;
