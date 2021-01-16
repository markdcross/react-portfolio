import React from 'react';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <Row className='credits' fixed='bottom'>
      <p className='text-center text-muted'>
        Created by Mark Cross | Powered by React&nbsp;
        <i className='fab fa-react'></i> | Copyright © 2020
      </p>
      <span className='text-center text-muted'>
        &nbsp;Photo by&nbsp;
        <a href='https://unsplash.com/@kovacsz1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
          Z S
        </a>
        &nbsp;on&nbsp;
        <a href='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
          Unsplash
        </a>
      </span>
    </Row>
  );
};
export default Footer;
