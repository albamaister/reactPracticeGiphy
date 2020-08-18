import React, {useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';
import { api_key } from '../utils/apikey';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=emmawatson&limit=10&api_key=${api_key}`;
        const resp = await fetch ( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        } );
        console.log(gifs);
        setImages(gifs);
    }


    return (
        <>
            <h3>{ category }</h3>
            <ol>
                {images && images.map(image => <GifGridItem key={ image.id } image={image}/>)}                
            </ol>
        </>
    )
}
