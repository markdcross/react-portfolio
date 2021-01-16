import React from 'react';

export const ContactInfo = () => {
  return (
    <p>
      Email:
      <a href='mailto:markdcross@gmail.com'> markdcross@gmail.com</a>
      <br />
      Phone:
      <a href='tel:+14102713079'> 410.271.3079</a>
      <br />
      Calendly:
      <a
        href='https://calendly.com/markdcross/15min'
        target='_blank'
        className='calendly'
        rel='noreferrer noopener'
      >
        {' '}
        Put time on my calendar
      </a>
      <br />
    </p>
  );
};

export default ContactInfo;
