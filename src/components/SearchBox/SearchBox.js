import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, onSearch }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onSearch}
        aria-label="Search Robots" />
);

export default SearchBox;
