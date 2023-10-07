import { Link } from "react-router-dom";

const ServiceItems = ({ service }) => {

    const { id, title, picture, description, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl mb-8">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <h3 className="font-semibold text-lg">Price: {price}</h3>
                    <Link to={`/services/${id}`}>
                        <button className="btn btn-outline justify-end">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;