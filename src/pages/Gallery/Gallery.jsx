import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const [images, setImages] = useState([])


    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setImages(data))
        
    }, [])

    return (
        <div className="md:container mx-auto py-20">
            <h2 className="text-center font-fontTitle text-4xl md:text-6xl pb-4">Gallery</h2>
            <hr className="w-1/3 mx-auto" />
            <hr className="w-1/3 mx-auto pb-20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 ">
            {
                images.map(image => <GalleryItem
                    key={image.id}
                    image={image}
                ></GalleryItem>)
            }
            </div>
        </div>
    );
};

export default Gallery;