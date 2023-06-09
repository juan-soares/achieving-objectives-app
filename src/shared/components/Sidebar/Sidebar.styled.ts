import styled from "styled-components";

const StyledSidebar = styled.aside`
  border-right: 1px solid black;
  width: 20%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-word;
  background-color: ${(props) => props.theme.colorGrey};

  @media (max-width: 1000px) {
    width: 20%;
  }

  .searchbar {
    margin: 20px 0 40px 0;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    input {
      font-style: italic;

      @media (max-width: 1000px) {
        width: 80%;
        margin-bottom: 10px;
      }
    }

    input,
    button {
      padding: 5px 10px;
    }

    button:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colorGreen};
      border-color: ${(props) => props.theme.colorGreen};
      transition: 0.1s;
    }
  }

  span {
    font-style: italic;
  }

  h3 {
    padding: 15px;
    font-size: 16pt;
  }

  nav {
    ul {
      list-style-type: none;
      li {
        font-size: 15pt;
        padding: 15px;
        border-bottom: 1px solid ${(props) => props.theme.coloBlack};

        a {
          color: ${(props) => props.theme.colorBlack};
          text-decoration: none;
          font-weight: bolder;

          :hover {
            color: ${(props) => props.theme.colorPink};
          }
        }
      }
    }
  }
`;

export default StyledSidebar;
