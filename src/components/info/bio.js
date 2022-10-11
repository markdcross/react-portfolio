import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Bio = () => {
  return (
    <Container className="bioBlock">
      <Row>
        <article className="col-md-12">
          <Image
            src="img/tinified/headshot.png"
            alt="headshot"
            className="headshot"
            roundedCircle
          />
          <div>
            <h1 className="mt-3">Who is that handsome devil?</h1>
            <p className="mt-4">
              I'm Mark Cross and I'm a full-stack engineer. Born and raised in
              Annapolis, MD, graduate of the University of Delaware (go Blue
              Hens 🐓), and now Richmond local. I spent the first decade (and
              change) of my career in SaaS sales and sales leadership, and now
              use the lessons I've learned to build world-class software.
            </p>
            <p className="mt-4">
              Mix all of that up with my amazing wife, Amy, our nine-month old
              son, Wes, and an insatiable desire to learn, explore, and create?
              It's the stuff dreams are made of.
            </p>
          </div>
          <i
            className="far fa-hand-point-down arrowScrollDown"
            style={{ fontSize: "2rem", color: "#143840" }}
          ></i>
        </article>
      </Row>
    </Container>
  );
};

export default Bio;
