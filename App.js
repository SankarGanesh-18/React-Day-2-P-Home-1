import React, { Component } from 'react';
import Separate from './Book/Separate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Separate name='Harry Potter' author='J K Rowling'></Separate><br></br>
       <Separate name='Around the World in eighty days' author='Jules Verne'></Separate><br></br>
       <Separate name='The Adventures of Tom Sawyer' author='J K Mark Twain'></Separate><br></br>
       <Separate name='Gulliver’s Travels' author='Jonathan Swift'></Separate><br></br>
       <Separate name='Harry Black Beauty' author='Anna Sewell'></Separate>
      </div>
    );
  }
}

export default App;
