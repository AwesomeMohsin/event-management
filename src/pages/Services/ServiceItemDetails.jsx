import { useLoaderData, useParams } from "react-router-dom";

const ServiceItemDetails = () => {

    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)

    const service = services.find(service => service.id === idInt);


    return (
        <div className="py-16 w-11/12 h-auto mx-auto ">
            <div className="">
                <img src={service.picture} alt="" className="mx-auto w-[1000px] h-full rounded-lg" />

            </div>
            <div className="text-center pb-10 lg:w-2/4 md:w-3/4 mx-auto">
                <h2 className="text-4xl font-bold pt-12 text-[#0B0B0B]">{service.title}</h2>
                <p className="py-6 font-normal leading-7 text-gray-600">{service.description}</p>
                <h4 className="text-2xl font-semibold">Price: Only {service.price} </h4>
                <button className="mt-4 btn btn-outline">Book Now</button>
            </div>



        </div>
    );
};

export default ServiceItemDetails;