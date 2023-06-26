import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

    const [keyword,SetKeyword] = useState('');
    const navigate = useNavigate();

    const handlerSearch = (e) => {
        e.preventDefault();
        
        
        navigate(`/Search?q=${keyword}`);

        
    }

    
  return (
    <form onSubmit={handlerSearch}>
        <input className='form-control' type="search" name="searchbar" id="searchbar" placeholder='Search' onChange={(e) => SetKeyword(e.target.value)}/>
    </form>
  )
}

export default SearchBar