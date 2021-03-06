/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0
*/
// Component with all Styled Components
import styled from 'styled-components';
import { Alert } from 'reactstrap';

const boxShadow = '0 0.71rem 0.4285rem -0.4285rem #777';
const brandColor = 'RGB(47,62,78)';
const widthSmall = '80vw';
const widthLarge = '60vw';

export const Input = styled.input`
  width: 40vw;
  display: inline;
  margin-left: 1.5rem;
`;

export const AlertStyled = styled(Alert)`
  width: ${widthLarge};
  margin: 1rem auto;
  @media (max-width: 375px) {
    width: ${widthSmall};
  }
`;

export const Header = styled.header`
  background-color: ${brandColor};
  color: white;
  font-size: 1.6rem;
`;

export const QuestionBox = styled.div`
  background-color: rgba(205, 205, 205, 0.33);
  border-radius: 0.15rem;
  box-shadow: ${props => props.highlight ? boxShadow : 'none' };
  -webkit-box-shadow: ${props => props.highlight ? boxShadow : 'none' };
  -moz-box-shadow: ${props => props.highlight ? boxShadow : 'none' };
  margin: 1rem auto;
  width: ${widthLarge};
  text-align: left;
  @media (max-width: 375px) {
    width: ${widthSmall};
  }
`;

export const Title = styled.h5`
  background-color: #80808024;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 1.12rem;
  padding: 0.5rem 0.3rem 0.5rem 1rem;
  margin-top: 1rem;
`;

export const FormBox = styled.div`
  margin: auto;
  width: ${widthLarge};
  @media (max-width: 375px) {
    width: ${widthSmall};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;
