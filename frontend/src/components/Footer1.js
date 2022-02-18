import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/css/Footer.css";

function Footer1() {
  return (
    <footer class="footerdiv" fixed="bottom">
        <div className="border-bottom"></div>
        <p className="d-flex justify-content-center mt-4 footer-caption">
          Receive exclusive promotions, private sales and news
        </p>

        <div>
          <Form className="d-grid gap-3 col-2 mx-auto mt-3" id="form-control" md={8} sm={10}>
            {/* <Form className="row justify-content-lg-center col-2"> */}
            <Form.Group className="mb-2 form-style" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </div>

        <div className="d-grid gap-3 col-2 mx-auto mt-3">
          {/* <div className="d-flex justify-content-center"> */}
          <Button variant="dark"
            className=" text-capitalize text-light"
            type="submit"
          >
            Subscribe
          </Button>
        </div>
        <div
          className="sg-caption-light sg-input-error fw-lighter mt-3"
          id="newsletter"
          data-testid="newsletterSubscriptionFooter.form.mailError"
        >
          By subscribing you agree to our Privacy Policy and Promotion
        </div>


        <div class="footernav my-5">
          <span>
            <a href="">Know More About Us</a>
          </span>
        </div>

        <div className="footer-icons">
          <span className="footericon">
            <div className="footer-fb">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="black" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"></path></svg>
          </div>
          <div className="footer-insta">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="black" d="M224 202.7A53.34 53.34 0 1 0 277.4 256 53.38 53.38 0 0 0 224 202.7zm124.7-41a54 54 0 0 0 -30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0 -30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33S91 329.3 99.32 350.3a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33S357.1 182.7 348.8 161.7zM224 338a82 82 0 1 1 82-82A81.9 81.9 0 0 1 224 338zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14A19.1 19.1 0 0 1 309.4 189.7zM400 32H48A48 48 0 0 0 0 80V432a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V80A48 48 0 0 0 400 32zM382.9 322c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.6 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.6 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.6-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05C384.4 216.4 384.4 295.6 382.9 322z"></path></svg>
          </div>
          </span>
        </div>
    </footer>
  );
}

export default Footer1;
