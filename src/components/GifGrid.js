import React, {useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category])

    


    return (
        <React.Fragment>
            <h3>{ category }</h3>
            <div className='card-grid'>
                {images && images.map(image => <GifGridItem key={ image.id } image={image}/>)}                
            </div>
        </React.Fragment>
    )
}
