/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { connect } from  'react-redux';
import { getLatestMessage } from 'redux-flash';
import { Alert } from 'reactstrap';
import './App.css';
import * as actions from  './actions/index';
import Questions from './components/questions';
import Forms from './components/forms';
import { Header, Title, AlertStyled } from './components/styleds';
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
    this.props.fetchQuestions();
  }
  handleSubmit = (data) => {
    data = { ...data, id: this.props.db.byId.length + 1};
    this.props.addQuestion(data);
  }
  handleRemove = () => {
    this.props.removeQuestions();
  }
  render () {
    const filtered = filterArray(this.props.db.byId, this.state.width);
    console.log(filtered)
    const flash = this.props.flash;
    return (
      <div className="App">
        <Header>
          <img alt="logo" src={logo} />
        </Header>
        <Title> Created Questions </Title>
        {filtered.length > 0 ? filtered.map((el, index) =>
          <Questions
            key={index}
            data={el}
          />) :
          <AlertStyled color='danger'> No questions yet </AlertStyled>
        }
        <Buttons handleRemove={this.handleRemove}/>
        <Title> Create a new question </Title>
        {flash ?
          <Alert color={flash.isError ? 'danger' : 'success'}
            style={{ margin: '1rem auto', width: '60vw' }}
            >
              {this.props.flash.message}
            </Alert> : null
          }
        <Forms onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    flash: getLatestMessage(state),
    db: state.db
  }
}

export default connect(mapStateToProps, actions )(App);
