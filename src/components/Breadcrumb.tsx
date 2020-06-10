import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  products: Product[];
  label: string;
  link: string;
  isLast: boolean;
}

const Breadcrumb: React.FC<Props> = ({ products, label, link, isLast }) => {

  const preparedLabel = products.find(product => (
    String(product.id) === label
  ))?.name || label;


  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__arrow" />
      {isLast
        ? <span className="breadcrumbs__last">{preparedLabel}</span>
        : (
          <NavLink
            to={link}
            className="breadcrumbs__link"
            activeClassName="breadcrumbs__link--active"
          >
            {preparedLabel}
          </NavLink>
        )}
    </li>
  );
};

export default Breadcrumb;
