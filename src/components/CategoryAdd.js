import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.length > 2 ) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleInputChange}/>
        </form>        
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
