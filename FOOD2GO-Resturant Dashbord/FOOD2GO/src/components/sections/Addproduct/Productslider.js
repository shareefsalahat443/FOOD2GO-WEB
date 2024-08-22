import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class Productslider extends Component {
    render() {
        return (
            <Carousel id="imagesSlider" className="ms-image-slider carousel slide" data-ride="carousel" indicators={false}>

                <Carousel.Item>
                    <img className="d-block w-100" src="assets/img/FOOD2GO/add-product-1.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="assets/img/FOOD2GO/add-product-2.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="assets/img/FOOD2GO/add-product-3.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Productslider;