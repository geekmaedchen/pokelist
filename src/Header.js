import styled from 'styled-components/macro'

const Header = styled.div`
  display: grid;
  grid-template-rows: 2fr 0.5fr 0.8fr;
  background: whitesmoke;
  color: #202020;
  padding: 2px;
  border: 2px solid black;

  .Logo {
    display: flex;
    justify-self: center;
  }

  .Links {
    display: flex;
    justify-content: space-around;
    margin: 5px;
  }
`

export default Header
