/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.css';
import Recipies from './Recipies.js'

var App = () => {

  const APP_ID = "619fd728";
  const APP_KEY = "ab1bf41630804cca38bc8b44f0843b86";
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}></input>
        <button className="search-button" type="submit">
          Search
          </button>
      </form>
      <div className="recipes">
      {recipies.map(data => (
        <Recipies
          key={data.recipe.calories}
          title={data.recipe.label}
          calories={data.recipe.calories}
          image={data.recipe.image}
          ingredients={data.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  )
}

export default App;
