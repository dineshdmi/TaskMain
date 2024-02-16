import React from 'react';
import './CSS/Product.css'
import { Container, Row, Col } from "reactstrap";
import BlogList from '../Blog/BlogList';
import carData from "../Assets/data/carData";
import CarItem from "../CartItem/Cartitem.jsx";
import company from '../Assets/logo.png'


class ProductList extends React.Component {
    render() {
        return (
            <div>
                <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />

                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center mb-5">
                                <h2 className="section__title">Hot Offers</h2>
                            </Col>

                            {carData.slice(0, 6).map((item) => (
                                <CarItem item={item} key={item.id} />
                            ))}
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" className="mb-5 text-center">
                                <h2 className="section__title">Latest Blogs</h2>
                            </Col>

                            <BlogList />
                        </Row>
                    </Container>
                </section>
                
            </div>
            
        );
    }
}

export default ProductList;
