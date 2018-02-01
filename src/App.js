/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import './App.css';
import db from './data/questions.json';
import Questions from './components/questions';

class App extends Component {
  render () {

    return (
      <div className="App">
        {db.byId.map((el, index) =>
          <Questions
            key={index}
            data={el}
          />)}
      </div>
    );
  }
}

export default App;
