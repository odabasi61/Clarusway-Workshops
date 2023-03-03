import styled, { css } from "styled-components";

const Links = styled.a`
  text-decoration: none;
  padding: 2rem 0;
  font-size: 1.2rem;
  transition: all 0.4s;
  &:hover {
    background-color: turquoise;
    font-weight: 700;
  }

  ${({ small }) =>
    small &&
    css`
      background-color: black;
      color: #61dbfb;
      padding: 1rem;
      margin: 1rem;
    `}
`;

export default Links;
