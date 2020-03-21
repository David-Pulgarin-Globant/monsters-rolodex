import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      .then(data => this.setState({ monsters: data }))
      .catch(error => this.setState({ error }));
  }

  onSearch = (text) => {
    this.setState({ searchField: text });
  }

  filterMonsters = () => {
    const { monsters, searchField } = this.state;
    return monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));
  }

  render () {
    const filteredMonster = this.filterMonsters();
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' onSearch={e => this.onSearch(e.target.value)} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
