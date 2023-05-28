import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colorBlack};
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 3px solid black;

  nav {
    label {
      label: pt;
      color: ${(props) => props.theme.colorWhite};
    }

    label,
    button {
      margin: 15px;
    }

    button {
      color: ${(props) => props.theme.colorBlack};
      padding: 5px 18px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colorGrey};
      border-color: ${(props) => props.theme.colorGrey};
    }
    button:hover {
      cursor: pointer;
      color: white;
      background-color: ${(props) => props.theme.colorPink};
      border-color: ${(props) => props.theme.colorPink};
    }
  }
`;

export default StyledHeader;
