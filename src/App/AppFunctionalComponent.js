import React from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.css';

function updateState() {
  let state = {
    monsters: [],
    searchField: '',
    error: ''
  }
  return function(newState) {
    if (newState) {
      state = { ...state, ...newState };
      App();
    }
    return state;
  }
}

// componentDidMount()
(function() {
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    .then(data => updateState()({ monsters: data }))
    .catch(error => updateState()({ error }));
})();

const onSearchChange = (text) => {
  updateState()({ searchField: text });
}

const filterMonsters = () => {
  const { monsters, searchField } = updateState()();
  return monsters.filter(monster => (
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  ));
}

const App = () => {
  const filteredMonster = filterMonsters();
  return (
    <div className="App">
      <SearchBox placeholder='Search Monsters' onSearchChange={e => onSearchChange(e.target.value)} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
