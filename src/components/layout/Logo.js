import React, { Fragment } from 'react';

const Logo = ({ logo, logoAlt }) => {
  return (
    <Fragment>
      <img src={logo} alt={logoAlt} width='50' />
    </Fragment>
  );
};

export default Logo;
