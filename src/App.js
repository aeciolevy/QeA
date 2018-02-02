/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { connect } from  'react-redux';
import { getLatestMessage } from 'redux-flash';
import './App.css';
import * as actions from  './actions/index';
import Main from './components/main-view';
import AllQuestions from './components/all-questions';
import Tooltip from './components/tooltip';
import { Header, Title } from './components/styleds';
import { FilterArray, SortArray } from './utils/help';
import logo from './images/logo.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { main: true, hover: true}
  }
  componentWillMount () {
    this.setState({width: window.innerWidth + 'px'});
    this.props.fetchQuestions();
  }
  handleHover = () => this.setState({hover: !this.state.hover});
  handleSubmit = (data) => {
    data = { ...data, id: this.props.db.byId.length + 1};
    this.props.addQuestion(data);
  }
  handleRemove = () => this.props.removeQuestions();
  handleSeeAll = () => this.setState({main: !this.state.main })
  handleSort = () => this.props.sortQuestion();
  render () {
    const filtered = FilterArray(this.props.db.byId, this.state.width);
    const flash = this.props.flash;
    return (
      <div className="App">
        <Header>
          <img alt="logo" src={logo} />
        </Header>
        <Title id="firstTitle"> Created Questions </Title>
        <Tooltip target="firstTitle"> </Tooltip>
        {this.state.main ?
          <Main
            filtered={filtered}
            handleRemove={this.handleRemove}
            flash={flash}
            onSubmit={this.handleSubmit}
            handleSeeAll={this.handleSeeAll}
            handleSort={this.handleSort}
          /> :
          <AllQuestions
            data={this.props.db.byId}
            handleSeeAll={this.handleSeeAll}
          />
        }
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
