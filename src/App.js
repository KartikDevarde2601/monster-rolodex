import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[],
      searchfield:''
    }
  }
  

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      this.setState({ monsters: users });
    } catch (error) {
      console.log('Error occurred while fetching data: ', error);
    }
  }

  handlechange = (e) => {
    this.setState({searchfield:e.target.value})
  }

  render(){
   const { monsters,searchfield } = this.state;  //object destucturing
   //filter array method
   const filtermonster=monsters.filter(monsters=>
    monsters.name.toLowerCase().includes(searchfield.toLowerCase())
   )//convert to lowercase  and use include method

    return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox
      placeholder='search monster'
      handlechange={this.handlechange}
      />

      <CardList monsters={filtermonster}/>
    </div>
  );

  }
}

export default App;