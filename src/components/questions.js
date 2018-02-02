/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0
*/
import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import Headline from './head-line';
import Textlong from './text-long';
import { QuestionBox } from './styleds'

class Questions extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render () {
    const { question, answer } = this.props.data;
    return (
      <QuestionBox highlight={this.state.isOpen}>
        <Headline handleClick={this.handleClick}> {question} </Headline>
        <Textlong isOpen={this.state.isOpen}> {answer} </Textlong>
      </QuestionBox>
    );
  }
}

export default Questions;
