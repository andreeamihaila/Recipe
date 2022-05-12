import { useState,useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'

const api="https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

   const[isLoading ,setIsLoading]=useState(false)
   const [query,setQuery]=useState("")
   const [recipe,setRecipe]=useState([]);

   //function to search for the recipe
    const searchRecipe=async()=>{
      setIsLoading(true);
      const url=api+query
      const res=await fetch(url)
      const data=await res.json()
      console.log(data)
      setRecipe(data.meals)
      setIsLoading(false);

    }
    useEffect(()=>{
      searchRecipe()
    },[])
    const handleSubmit=event=>{
      event.preventDefault()
      searchRecipe()
    }
  return (
    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar
      handleSubmit={handleSubmit}
      value={query}
      onChange={event=>setQuery(event.target.value)}
      isLoading={isLoading}
      />
      <div className="recipes">
        {
          recipe
           ? recipe.map(recipe=>(
            <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            />
          )):"no recipes!"}
      </div>
    </div>
  );
}

export default App;
