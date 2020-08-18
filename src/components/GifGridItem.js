import React from 'react'

export const GifGridItem = ({image}) => {

    const {id, title, url} = image;
    return (
        <div>
            <img src={url} alt={title}/> 
            <p>{title}</p>
        </div>
    )
}
