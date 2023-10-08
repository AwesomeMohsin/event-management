
const GalleryItem = ({image}) => {
    return (
        <div className="rounded-xl w-11/12 mx-auto lg:w-full">
            <img src={image.image} alt="" />
            
        </div>
    );
};

export default GalleryItem;