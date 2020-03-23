import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, onSearch }) => (
    <label className='search-container'>
        Filter Robots
        <input
            id='search-robots'
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={onSearch}
            aria-label="Search Robots" />
    </label>
);

export default SearchBox;
