import React from 'react';
import RecipesList from './components/RecipesList';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <RecipesList></RecipesList>
    </div>
  );
}

export default App;
