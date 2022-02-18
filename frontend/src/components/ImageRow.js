import React from "react";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";
import fossilimg3 from "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/images/fossilimg3.jpeg";
import fossilimg4 from "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/images/fossilimg4.jpeg";
import fossilimg8 from "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/images/fossilimg8.jpeg";
import "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/css/ImageRow.css";

function ImageRow() {
  return (
    <div className="second-carousel">
      <Row>
        <Col xs={6} md={4}>
          <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={fossilimg3} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={fossilimg4} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={fossilimg8} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={fossilimg3} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={fossilimg8} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
        <Col xs={6} md={4}>
        <figure className="position-relative">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={fossilimg4} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </MDBRipple>
            <div>
              <a href="/pendants" className="image-categories text-capitilise">
                Pendants
              </a>
            </div>
            <figcaption>Discover</figcaption>
          </figure>
        </Col>
      </Row>
      
    </div>
  );
}

export default ImageRow;
