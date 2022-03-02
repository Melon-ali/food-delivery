import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

export default function Services() {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('./fakas.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])
    return (
        <div className="service-container mt-5">
            {
                services.map(service => <Service
                    service={service}
                ></Service>)
            }
        </div>
    );
}
