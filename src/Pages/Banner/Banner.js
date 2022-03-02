import React from 'react';
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


export default function Banner() {
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col>
            <div>
              <h1 className='headline'>We Deliver The Taste Of Life</h1>
              <h4 className='headline2'>Get It Delivered Right To Your Door.</h4>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter your location" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
              <div class="input-group-append">
              <button type="button" class="btn btn-defult"><span className='food'>Search Food</span></button>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
        
      </Container>
    </div>
  )
}
