import React, { useState, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactInfo from './ContactInfo';
// import ContactForm from './ContactForm';

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <button
        className='btn btn-link align-middle'
        role='link'
        type='submit'
        name='op'
        value='Link 1'
        onClick={handleShow}
      >
        Contact
      </button>

      <Modal show={show} onHide={handleClose} id='contactModal'>
        <Modal.Header closeButton>
          <Modal.Title>Give me a shout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ContactInfo />
          {/* <hr />
          <ContactForm /> */}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default ContactModal;
