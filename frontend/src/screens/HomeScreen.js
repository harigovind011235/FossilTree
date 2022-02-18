import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ImageRow from '../components/ImageRow'
import ProductCarousel from '../components/ProductCarousel'
import Footer1 from '../components/Footer1.js'
import { listProducts } from '../actions/productActions'
import '/Users/harigovind/Documents/webappprojects/fossiltree/proshop_django/frontend/src/assets/css/homeScreen.css'


function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ProductCarousel />}
            <ImageRow></ImageRow>
            <h1 className="Home-Screen-Heading">Our Collections</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={4} className="p-4">
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                        <Footer1></Footer1>

                    </div>
            }
        </div>
    )
}

export default HomeScreen
