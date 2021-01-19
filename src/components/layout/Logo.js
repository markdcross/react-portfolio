import React, { Fragment } from 'react';

const Logo = ({ logo, logoAlt }) => {
  return (
    <Fragment>
      <img src={logo} alt={logoAlt} width='200' />
    </Fragment>
  );
};

export default Logo;
