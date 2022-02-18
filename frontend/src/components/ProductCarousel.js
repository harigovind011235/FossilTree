import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image, Button } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { MDBRipple } from "mdb-react-ui-kit";
import mangomodel4 from "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/images/mangomodel4.jpeg";
import resized2 from "/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/images/resized2.jpeg";
import '/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/css/Carousel.css'



function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel>
                    <Carousel.Item>
                        <MDBRipple
                            className="bg-image hover-overlay shadow-1-strong rounded"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img src={mangomodel4} className="w-100" />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                        <Carousel.Caption>

                            <div>
                                <Button variant="light" className="carousel-button text-capitalize">Discover More</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <MDBRipple
                            className="bg-image hover-overlay shadow-1-strong rounded"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <img src={resized2} className="w-100" />
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                ></div>
                            </a>
                        </MDBRipple>
                        <Carousel.Caption>
                            <div>
                                <Button variant="light" className="carousel-button text-capitalize" style={{ fontFamily: "MangoSans" }}>Discover More</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )

    )
}

export default ProductCarousel
