import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  button {
    height: 40px;
    padding: 0 15px;
    background-color: ${props => props.theme.buttonColor};
    border: none;
    outline: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Open Sans', 'Noto Sans KR', sans-serif;
    transition: all .3s;
    cursor: pointer;
    
    &:hover {
      opacity: .8;
    }
  }
`

export default GlobalStyle