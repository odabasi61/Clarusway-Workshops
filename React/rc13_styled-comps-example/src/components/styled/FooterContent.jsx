import styled from "styled-components";

const FooterContent = styled.footer`
  background-color: #8a1c4a;
  width: 100%;

  & > div {
    color: white;
    padding: 4rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 900px) {
      text-align: center;
    }

    & .divFlex {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 4rem;
      }

      & p {
        line-height: 2;
      }

      & .social {
        display: flex;
        gap: 1rem;

        & .icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 3px;
          border: 1px solid white;
        }

        & a {
          color: #fff;
        }
      }
    }
  }

  & img {
    max-width: 250px;
    padding-bottom: 2rem;

    @media (max-width: 500px) {
      max-width: 200px;
    }
  }
`;

export default FooterContent;
