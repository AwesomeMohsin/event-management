import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Expert from "./Expert";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Carousel from "react-multi-carousel";
// ..
AOS.init();

const Home = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (
        <div>
            <Banner></Banner>

            <div className="md:container mx-auto pt-10">
                {/* services */}
                <div id="services-container" className="py-20" data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Services></Services>
                </div>

                {/* reviews */}
                <div
                    className="py-20"
                    data-aos="fade-up" data-aos-delay="500"


                >
                    <h2 className="text-center font-fontTitle text-4xl md:text-6xl  pb-4">Reviews</h2>
                    <hr className="w-1/3 mx-auto" />
                    <hr className="w-1/3 mx-auto pb-20" />
                    {/* <Carousel
                        responsive={responsive}
                        containerClass="-mx-[10px]"
                        itemClass="px-[10px]"
                        infinite={true}
                        autoPlay={true}
                    >
                        {
                            reviews.map(review => <Reviews
                                key={review.id}
                                eventName={review.eventName}
                                description={review.description}
                                name={review.name}
                            ></Reviews>)
                        }
                    </Carousel> */}


                    {
                        reviews.map(review => <Reviews
                            review={review}
                            key={review.id}
                            eventName={review.eventName}
                            description={review.description}
                            name={review.name}
                        ></Reviews>)
                    }
                </div>

                {/* expert */}
                <div className=""
                    data-aos="fade-up" data-aos-delay="500"
                >
                    <Expert></Expert>
                </div>

            </div>
        </div>

    );
};

export default Home;