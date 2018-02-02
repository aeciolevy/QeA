/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import './App.css';
import db from './data/questions.json';
import Questions from './components/questions';
import Forms from './components/forms';
import { Header, Title } from './components/styleds';
import { filterArray } from './utils/help-ui';
import logo from './images/logo.png';
import Buttons from './components/buttons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentWillMount () {
    this.setState({width: window.innerWidth + 'px'});
  }

  handleSubmit = () => {
    console.log("submitted");
  }

  render () {
    const filtered = filterArray(db.byId, this.state.width);
    return (
      <div className="App">
        <Header>
          <img alt="logo" src={logo} />
        </Header>
        <Title> Created Questions </Title>
        {filtered.map((el, index) =>
          <Questions
            key={index}
            data={el}
          />)}
        <Buttons />
        <Title> Create a new question </Title>
        <Forms onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
