import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {const {id} = useParams();
const [services, setServices] = useState();
useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data));
},[])

const details = services?.find(detail => detail.id === id)
console.log(details);

return (
    <div className="container">
        <div className="row p-5 color">
            <div className="col-lg-6 col-12">
                <img src={details?.img} alt="" style={{ width: "100%"}} />
            </div>
            <div className="col-lg-6 col-12">
                <h1> <span className="text-2">Getaway </span> <span className="text">Tourism</span></h1>
                <h2 className="py-3">Service Name: {details?.name}</h2>
                <h5>{details?.description}</h5>
            </div>
        </div>
        
    </div>
);
}
