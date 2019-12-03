import styled from 'styled-components/macro'

const Header = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  background: whitesmoke;
  color: #202020;
  padding: 2px;
  border: 2px solid black;

  .Links {
    display: flex;
    justify-content: space-around;
  }
`

export default Header
