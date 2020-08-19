import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {  

    const {data: images, loading} = useFetchGifts(category);

    return (
        <React.Fragment>
            <h3>{ category }</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
                {images && images.map(image => <GifGridItem key={ image.id } image={image}/>)}                
            </div>
        </React.Fragment>
    )
}
