import styled from 'styled-components/macro'

const Header = styled.div`
  display: grid;
  /*grid-template-rows: 2fr 0.5fr 0.8fr; mit Suchfeld*/
  grid-template-rows: 2fr 0.5fr;
  color: #202020;
  padding: 2px;
  border-bottom: 2px solid lightgrey;

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
