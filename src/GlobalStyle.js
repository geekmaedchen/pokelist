import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: sans-serif;
  background-color: hsl(102, 30%, 97%)
}

.hidden {
  display: none
}
`

export default GlobalStyle
