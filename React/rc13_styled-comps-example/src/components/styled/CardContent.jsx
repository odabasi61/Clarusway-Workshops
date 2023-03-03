import styled from "styled-components";

const CardContent = styled.div`
  display: flex;
  gap: 4rem;
  padding: 4rem;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin-bottom: 2rem;
  background-color: rgb(255, 255, 255, 0.4);

  & p {
    line-height: 2;
  }

  & h2 {
    font-size: 2.5rem;
    padding-bottom: 1.5rem;
  }

  & img {
    max-width: 400px;
    border-radius: 5px;
  }

  @media (max-width: 1200px) {
    p {
      line-height: 1.3;
    }

    h2 {
      font-size: 2rem;
      padding-bottom: 1.2rem;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;

    img {
      max-width: 500px;
    }
  }

  @media (max-width: 700px) {
    gap: 2rem;
    padding: 2rem;
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 500px) {
    padding: 1rem;
    img {
      max-width: 250px;
    }
  }
`;

export default CardContent;
