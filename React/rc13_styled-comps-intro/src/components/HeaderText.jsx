import styled from "styled-components";

const HeaderText = styled.h1`
  color: ${({ color }) => color || "black"};
  background-color: ${({ bgColor }) => bgColor || "yellow"};
  text-align: center;
  font-size: 2rem;
`;

export default HeaderText;
