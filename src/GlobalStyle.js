import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: sans-serif;
  background-color: hsl(102, 30%, 97%)
}

select {
    display: inline-block;
    cursor: pointer;
    font-size: 0.9em;
    margin: 10px;
    padding: 2px 10px;
    border-radius: 5px;
}



.hidden {
  display: none
}
`

export default GlobalStyle
