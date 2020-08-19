import React, {useState} from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <div>
            <h2>GifApp</h2>
            <CategoryAdd setCategories={setCategories} categories={categories}/>                    
            <ol>
                {categories.map((category) => <GifGrid key={category} category={category}/>)}
            </ol>
        </div>
    )
}

export default GifApp;
