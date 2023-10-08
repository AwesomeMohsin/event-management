import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Expert from "./Expert";

const Home = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div>
            <Banner></Banner>

            <div className="md:container mx-auto pt-10">
                {/* services */}
                <div className="py-20">
                    <Services></Services>
                </div>

                {/* reviews */}
                <div className="py-20">
                    <h2 className="text-center font-fontTitle text-4xl md:text-6xl  pb-4">Reviews</h2>
                    <hr className="w-1/3 mx-auto" />
                    <hr className="w-1/3 mx-auto pb-20" />
                    {
                        reviews.map(review => <Reviews
                            review={review}
                            key={review.id}
                        ></Reviews>)
                    }
                </div>

                {/* expert */}
                <div className="">
                    <Expert></Expert>
                </div>

            </div>
        </div>

    );
};

export default Home;