import React from 'react';
import './Static/css/SearchBar.css';
import search from './Static/images/search.gif'
function SearchBar() {
  return (
    <>
    <form action="GET">
        <input type="search" name="search" id="search" placeholder='Search Keyword'/>
        <button type="submit"><img src={search} alt="search" /></button>
    </form>
    </>
  )
}

export default SearchBar