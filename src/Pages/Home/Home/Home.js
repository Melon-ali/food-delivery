import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../../Banner/Banner';
import Service from '../Service/Service';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
    const [homes, setHomes] = useState([]);
    useEffect(() => {
        fetch('https://shielded-hollows-98040.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setHomes(data))
    },[])

  return (
    <div>
        <Banner></Banner>
        <div className="container home-container py-5 ">
            <div className="bg-image1">
                
            </div>
            <div className="bg-image2">
                
            </div>
        </div>
        <br />
        <div id="services" className="service-container p-4">
            {
                homes.map(service => <Service
                    service = {service}
                ></Service>)
            }
        </div>
        <div className='fast'>
            <Container>
                <Row>
                    <h1 className='headline'>Make orders With <br /> Our <span className='off'>Application</span></h1>
                    <div>
                        <h5 className='headline2'>Order and pay in a few minutes.</h5>
                        <p className='para'>Сhoose food and pay for the order in a couple of clicks <br /> online also choose you current location using GPS.</p>
                    </div>  
                    <div>
                        <h5 className='headline2'>Check Delivery Status.</h5>
                        <p className='para'>Follow the status of your order in real time and also track the <br /> delivery path until you get it.</p>
                    </div>  
                </Row>
            </Container>
        </div>
        <div className="container home-container p-5">
            <div className="bg-image3">
                
            </div>
            <div className="bg-image4">
                
            </div>
        </div>
        <div className='last'>
            <Container>
                <Row>
                    <Col>
                        <div>
                        <h1 className='headline'>Make Your first order and get <span className='off'> 50% off</span></h1>
                        <h4 className='headline2'>Get It Delivered Right To Your Door.</h4>
                        <p className='para'>If you order food delivery from us for the first time then we have a gift <br /> - 50% discount for you on the first order. You just need to register and <br /> order your favorite food.</p>
                        </div>
                        <button type="button" class="btn btn-defult"><span className='food'>Order Products</span></button>
                    </Col>
                    <Col></Col>
                </Row>
                
            </Container>
        </div>
    </div>
  )
}
