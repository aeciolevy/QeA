/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0,
  func-names: 0
*/
import React, { Component } from 'react';
import Questions from './questions';
import { AlertStyled, Input } from './styleds';

class AllQuestions extends Component {
  constructor(props){
    super(props);
    this.state = { filter: ''}
  }
  addFilter = (e) => {
    this.setState({filter: e.target.value});
  }

  render() {
    const { data, handleSeeAll } = this.props;
    let dataFilter = this.props.data.filter(el =>
      el.question.match(new RegExp(this.state.filter, 'i')));
    const handleSee = () => handleSeeAll();
    return (
      <div>
        <div>
          <button
            onClick={() => handleSee()}
            className="btn btn-primary"
          >
            Back
          </button>
          <Input type="text" className="form-control"
            placeholder="Search questions"
            onChange={this.addFilter} style={{width: '40vw', display: 'inline'}}
          />
        </div>
        {dataFilter.length > 0 ? dataFilter.map((el, index) =>
          <Questions key={index} data={el}/>) :
          <AlertStyled color='danger'> No questions yet </AlertStyled>
        }
      </div>
     );
  }
};

export default AllQuestions;
