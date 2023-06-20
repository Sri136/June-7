import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dog.ceo/api/breed/malinois/images');
                setImages(response.data.message.slice(0, 4));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Dog Images</h2>
            <ul>
                {images.map((image, index) => (
                    <img src={image} />
                ))}
            </ul>
        </div>
    );
}

export default DogImages;
