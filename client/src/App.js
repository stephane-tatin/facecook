import React from 'react';
import RecipesListComponent from './components/RecipesListComponent';
import NavbarComponent from './components/NavbarComponent';
import { Route, BrowserRouter } from "react-router-dom"
import RecipeFormComponent from './components/RecipeFormComponent';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    

      <NavbarComponent></NavbarComponent>
      <Route path="/api/recipes" component={RecipesListComponent}></Route>
      <Route path="/api/addrecipe" component={RecipeFormComponent}></Route>

    </div>
    </BrowserRouter>
  );
}

export default App;
