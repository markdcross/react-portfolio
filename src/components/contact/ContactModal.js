import React, {Fragment, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactInfo from './ContactInfo';
// import ContactForm from './ContactForm';
import Nav from 'react-bootstrap/Nav';

function ContactModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <Nav.Link className='links' onClick={handleShow}>
                Contact
            </Nav.Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Give me a shout:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ContactInfo/>
                    {/* <hr />
          <ContactForm /> */}
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default ContactModal;
