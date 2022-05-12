import React from 'react'

const RecipeCard=({recipe}) => {
    const{idMeal,strMeal,strCategory,strMealThumb}=recipe;//{nu merge cu litara mare}
  return (
    <div className="card">

        <img
            src={strMealThumb}
            alt={strMeal}
            className="card-image"

        />
        <div className='card-body'>
            <h3>
                {strMeal}
            </h3>
            <a href={"https://www.themealdb.com/meal/"+idMeal} target="_blank">Ingredients</a>
        </div>
    </div>
  )
}

export default RecipeCard