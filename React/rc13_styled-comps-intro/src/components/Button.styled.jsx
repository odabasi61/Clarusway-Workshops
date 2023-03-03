import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink;
  color: white; */

  // props ile ternary yaptık
  background-color: ${(props) => (props.primary ? "white" : "hotpink")};

  // havada destructure
  color: ${({ primary }) => (primary ? "hotpink" : "white")};

  width: 8rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 2px solid hotpink;
  font-size: 1.1rem;
  transition: all 0.4s;
  &:hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`;

// yukardaki butondan yeni buton türetiyoruz
export const FS13Button = styled(Button)`
  background-color: ${({ react }) => (react ? "#B250BA" : "green")};
  color: ${({ react }) => (react ? "yellow" : "white")};
  border-color: ${({ react }) => react || "blue"};
  border-color: ${({ react }) => react && "black"};
`;
