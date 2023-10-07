import { useEffect, useState } from "react";
import ServiceItems from "./ServiceItems";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        
        <div className="md:container py-16  mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold font-fontTitle text-center pb-10">We arrange</h2>
            <div className="gap-4 mx-auto w-11/12 lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                services.map(service => <ServiceItems
                    key={service.id}
                    service={service}
                ></ServiceItems>)
            }
            </div>

            
        </div>
    );
};

export default Services;