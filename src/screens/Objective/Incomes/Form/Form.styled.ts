import styled from "styled-components";

const StyledIncomesForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 30%;

  form {
    display: flex;
    flex-direction: column;
    width: 40%;

    label,
    input,
    span {
      padding: 5px;
    }

    input {
      font-style: italic;
    }

    span {
      font-weight: bolder;
    }

    button {
      padding: 5px;
      color: white;
      background-color: ${(props) => props.theme.colorPink};
      border-color: ${(props) => props.theme.colorPink};

      :hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colorGreen};
        border-color: ${(props) => props.theme.colorGreen};
        transition: 0.5s;
      }
    }
  }
`;

export default StyledIncomesForm;
