import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Bio = () => {
    return (
        <Container className='bioBlock'>
            <Row>
                <article className='col-md-12'>
                    <Image
                        src='img/tinified/headshot.png'
                        alt='headshot'
                        className='headshot'
                        roundedCircle
                    />
                    <div>
                        <h1>Who is that handsome devil?</h1>
                        <p>
                            I'm Mark Cross and I'm a full-stack JavaScript Web Developer. Born
                            and raised in Annapolis, MD, graduate of the University of
                            Delaware (go Blue Hens 🐓), and now Richmond local. I've spent my
                            career in sales and sales leadership, having recently served as
                            the head of sales for Richmond-based startup,
                            <a href='https://www.edconnective.com/'> EdConenctive</a>.
                        </p>
                    </div>
                    <i
                        className='far fa-hand-point-down arrowScrollDown'
                        style={{fontSize: '2rem', color: '#143840'}}
                    ></i>
                </article>
            </Row>
        </Container>
    );
};

export default Bio;
