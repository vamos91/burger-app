import { useState } from 'react';
import './App.css';
import Burger from './components/Burger';

function App() {
  const listOfBurgerName = ['New yorker', 'Chicken', 'Veggie']
  const [chosenBurger, setChosenBurger] = useState('')
  const [sauce, setSauce] = useState([])

  //Get data from child component and set the state of chosen burger using string state type
  const getBurgerFromChildComponent = (burger) => {
    setChosenBurger(burger)
  }

  //Adding sauce to menu using array state type and spread operator
  const addSauce = (sauceAdded) => {
    if(!sauce.includes(sauceAdded)){
      setSauce([...sauce, sauceAdded])
    } 
  }

  return (
    <div>
      <h2>Vous avez choisis le: {chosenBurger}</h2>
      <h3>Ajoutez une sauce: {sauce.join(',')}</h3>
      <button onClick={() => addSauce('mayo')}>Mayo</button>
      <button  onClick={() => addSauce('ketchup')}>Ketchup</button>
      <div className="App">
        <div>
          {
            listOfBurgerName.map((burger, index) => (
              <Burger key={index} burgerName={burger} handleParentClick={getBurgerFromChildComponent} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
