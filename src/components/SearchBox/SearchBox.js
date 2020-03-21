import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, onSearch }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onSearch} />
);

export default SearchBox;
