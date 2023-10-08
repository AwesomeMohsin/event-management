/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RpVPsMT/banner.jpg)' }}>

            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-black mx-auto">
                <div className="w-11/12 md:w-3/4 space-y-6">
                    <h1 className="mb-5 
                        text-4xl md:text-5xl lg:text-7xl font-fontTitle font-bold  ">Crafting Moments,<br /> Creating Memories</h1>
                    <p className="mb-5 btn btn-outline  border-0 normal-case text-base ">Elevate your celebrations with Awesome Event Management. From weddings to birthdays, we create social events that is unforgettable moments and last a lifetime.
                    </p>
                    <p className="font-fontTitle text-xl md:text-3xl pt-6">Let's plan your perfect event together!</p>
                    <div>
                    <a href="#services-container"><button className="btn btn-outline ">View our Services</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;