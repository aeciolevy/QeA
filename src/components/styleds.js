/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0
*/
import styled from 'styled-components';

const boxShadow = '0 0.71rem 0.4285rem -0.4285rem #777';

export const QuestionBox = styled.div`
  background-color: rgba(205, 205, 205, 0.33);
  border-radius: 0.15rem;
  box-shadow: ${props => props.highlight ? boxShadow : 'none' };
  -webkit-box-shadow: ${props => props.highlight ? boxShadow : 'none' };
  -moz-box-shadow: ${props => props.highlight ? boxShadow : 'none' };
  margin: 1rem auto;
  width: 60vw;
  text-align: center;
`;

export const Title = styled.h5`
  font-size: 1.12rem;
  padding: 0.5rem 0.3rem 0.5rem 0.3rem;
`
