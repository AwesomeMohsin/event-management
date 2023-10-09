
const Expert = () => {
    return (
        <div className="pb-20">
            <h2 className="text-center font-fontTitle text-4xl md:text-6xl pb-4">Meet our Expert</h2>
            <hr className="w-1/3 mx-auto" />
            <hr className="w-1/3 mx-auto pb-10" />

            <div className="hero  shadow-xl rounded-xl">
                <div className="hero-content flex-col lg:flex-row">

                    <img src="/images/expert.png" className="max-w-sm rounded-lg " />
                    <div className="text-center lg:text-left w-10/12">
                        <h1 className="text-3xl md:text-5xl font-bold">Event Manager</h1>
                        <p className="font-fontTitle text-xl  md:text-3xl pt-4">Kyle Shannon</p>
                        <p className="py-6">With a passion for creating unforgettable experiences and a keen eye for detail, Kyle is the driving force behind the seamless execution of all our events. With years of experience in the industry, Kyle brings a wealth of expertise and a creative touch to every project.</p>
                       
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Expert;