import styled from "styled-components";

const Sarmal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bg }) => bg || "transparent"};
  gap: 1rem;
`;

export default Sarmal;
