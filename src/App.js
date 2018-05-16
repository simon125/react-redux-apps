import React, { Component } from 'react';
import Counter from './components/Counter'
import ToDo from './components/ToDo'
import Text from './components/Text'
import UserList from './components/UserList'
import firebase from 'firebase'
import AsyncReduxCounter from './components/AsyncReduxCounter';

class App extends Component {
  render() {
    return (
 
      <div className="App">
      
      <AsyncReduxCounter/>
        <UserList />
      </div>
      
    );
  }
}

export default App;
