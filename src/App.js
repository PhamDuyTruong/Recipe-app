import React, {useState} from 'react'
import './App.css';
 import axios from 'axios';
 import RecipeTile from './Components/recipe-tile/index.js'

function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [heathLabel, setHeathLabel] = useState("vegan");
   const YOUR_APP_ID = "850fffc2";
   const YOUR_APP_KEY = "986ba34d60a85abf4a57e6c1b9decff0";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${heathLabel}`;

  const getRecipes = async () =>{
      const result = await axios.get(url);
      setRecipes(result.data.hits);
  };
   const onSubmit = (e) =>{
     e.preventDefault();
     getRecipes();
   }
  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza 🍔</h1> 
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Food ...."  className="app__input" value={query}
          onChange={(e) => setQuery(e.target.value)}/>
        <input className="app__submit" type="submit" value="Search" />
        <select className="app_healthLabel">
           <option  onClick={() =>{
             setHeathLabel("vegan")
           }}>
             Vegan
           </option>
           <option  onClick={() =>{
             setHeathLabel("vegetarian")
           }}>
             Vegetarian
           </option>
           <option value="paleo" onClick={() =>{
             setHeathLabel("paleo")
           }}>
            Paleo
           </option>
           <option  onClick={() =>{
             setHeathLabel("dairy-free")
           }}>
             Dairy-free
           </option>
           <option  onClick={() =>{
             setHeathLabel("gluten-free")
           }}>
              Gluten-free
           </option>
           <option  onClick={() =>{
             setHeathLabel("wheat-free")
           }}>
             Wheat-free
           </option>
           <option onClick={() =>{
             setHeathLabel("low-sugar")
           }}>
             Low-sugar
           </option>
           <option  onClick={() =>{
             setHeathLabel("egg-free")
           }}>
             Egg-free
           </option>
           <option onClick={() =>{
             setHeathLabel("peanut-free")
           }}>
             Peanut-free
           </option>
           <option  onClick={() =>{
             setHeathLabel("soy-free")
           }}>
             Soy-free
           </option>
           <option  onClick={() =>{
             setHeathLabel("tree-nut-free")
           }}>
             Tree-nut-free
           </option>
           <option  onClick={() =>{
             setHeathLabel("fish-free")
           }}>
             Fish-free
           </option>
        </select>
      </form>

      <div className="app__recipes">
         {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
