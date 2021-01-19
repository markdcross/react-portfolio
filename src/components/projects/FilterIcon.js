import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';

const FilterIcon = ({ filter, filterName }) => {
  // TODO on hover, textshadow goldish
  return (
    <Fragment>
      <Image
        src={`https://cdn.svgporn.com/logos/${filterName}.svg`}
        alt={filterName}
        onClick={() => filter(filterName)}
        className='filterIcon'
      />
    </Fragment>
  );
};

export default FilterIcon;
