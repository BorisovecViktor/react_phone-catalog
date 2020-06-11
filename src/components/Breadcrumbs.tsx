import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const Breadcrumbs = () => {
  const location = useLocation();
  const preparedLabels = useMemo(() => (
    location.pathname
      .split('/')
      .slice(1)
  ), [location]);

  const preparedBreadcrumbs = useMemo(() => (
    preparedLabels
      .reduce((accum: string[], item) => [...accum, `${accum}/${item}`], [])
  ), [preparedLabels]);

  return (
    <ul className="breadcrumbs">
      <NavLink
        to="/"
        className="breadcrumbs__item breadcrumbs__home"
        activeClassName="breadcrumb__link--active"
      />
      {preparedBreadcrumbs.map((crumb, index) => (
        <Breadcrumb
          label={preparedLabels[index]}
          link={crumb}
          key={crumb}
          isLast={index === preparedBreadcrumbs.length - 1}
        />
      ))}
    </ul>
  );
};

export default Breadcrumbs;
