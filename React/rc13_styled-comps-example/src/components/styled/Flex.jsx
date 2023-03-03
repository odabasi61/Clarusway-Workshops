import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 3rem;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }

  & h1 {
    padding-bottom: 2rem;
  }

  & div {
    flex: 3;
  }
`;

export default Flex;
