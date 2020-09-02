import React from 'react';
import RecipesListComponent from './components/RecipesListComponent';
import NavbarComponent from './components/NavbarComponent';





function App() {
  return (
    <div className="App">

      <NavbarComponent></NavbarComponent>
     <RecipesListComponent></RecipesListComponent>
      
    </div>
  );
}

export default App;
