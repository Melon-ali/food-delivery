import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../../Banner/Banner';
import Service from '../Service/Service';

export default function Home() {
    const [homes, setHomes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
        <div id="services" className="service-container">
            {
                homes.map(service => <Service
                    service = {service}
                ></Service>)
            }
        </div>
        <div className="container home-container pt-5">
            <div className="bg-image3">
                
            </div>
            <div className="bg-image4">
                
            </div>
        </div>
    </div>
  )
}
