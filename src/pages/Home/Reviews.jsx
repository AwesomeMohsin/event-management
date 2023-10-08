
const Reviews = ({eventName, description, name}) => {
    return (
        <div>
            <div className="bg-base-200 text-center space-y-10 p-10 border ">
                <h4 className="text-lg md:text-xl font-extralight">{eventName}:</h4>

                <h2 className="text-2xl md:text-4xl xl:text-6xl font-fontTitle w-11/12 mx-auto py-10">{description}</h2>

                <h4 className=" text-lg md:text-2xl">{name}</h4>

            </div>
        </div>
    );
};

export default Reviews;