import styled from 'styled-components'

const StyledButton = styled.button`
  max-width: ${props => props.maxWidth}px;
  min-width: ${props => props.minWidth}px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background-color: ${props => props.bgColor};
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
  
  &:disabled {
    background-color: #484643;
  }
`

const Button = ({disabled, children, ...rest}) => {
  return (
    <StyledButton disabled={disabled} {...rest}>{children}</StyledButton>
  )
}

export default Button