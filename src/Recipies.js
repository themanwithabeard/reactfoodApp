import React from "react";
import style from "./recipe.module.css"

const Recipies = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipes}>
      <h1 >{title}</h1>
      <h4>Ingredients</h4>
      <ol>
          {ingredients.map(data => (
              <li>{data.text}</li>
          ))}
      </ol>
      <p>{calories}</p>
       <img src={image} alt=""/>
        </div>
    )
}

export default Recipies