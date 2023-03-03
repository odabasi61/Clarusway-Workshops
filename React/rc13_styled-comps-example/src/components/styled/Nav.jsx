import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  /* flex-wrap: wrap; */

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 420px) {
    text-align: center;
  }
`;

export default Nav;
