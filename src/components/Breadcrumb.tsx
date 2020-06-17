import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  label: string;
  link: string;
  isLast: boolean;
}

const Breadcrumb: React.FC<Props> = ({ label, link, isLast }) => (
  <li className="breadcrumbs__item">
    <span className="breadcrumbs__arrow" />
    {isLast
      ? <span className="breadcrumbs__last">{label}</span>
      : (
        <NavLink
          to={link}
          className="breadcrumbs__link"
          activeClassName="breadcrumbs__link--active"
        >
          {label}
        </NavLink>
      )
    }
  </li>
);

export default Breadcrumb;
