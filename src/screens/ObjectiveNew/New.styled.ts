import styled from "styled-components";

const StyledScreenObjectiveNew = styled.div`
  height: 100%;

  .container-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15%;
    margin-top: 5%;

    h2 {
      text-align: center;
      color: ${(props) => props.theme.colorPink};
      padding-bottom: 30px;
      font-size: 30pt;

      @media (max-width: 430px) {
        font-size: 18pt;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      width: 300px;
      border: 1px solid ${(props) => props.theme.coloBlack};
      border-radius: 5px;
      box-shadow: black 5px 5px 10px;
      padding: 15px;

      @media (max-width: 430px) {
        width: 60%;
        word-break: break-all;
      }

      label {
        font-weight: bolder;
      }

      label,
      input,
      textarea {
        padding: 5px;
        margin-bottom: 15px;
      }

      input,
      textarea {
        font-style: italic;
      }

      button {
        margin-top: 15px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid black;
      }
      button:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colorGreen};
        border: 1px solid ${(props) => props.theme.colorGreen};
        transition: 0.5s;
      }
    }
    img {
      width: 20%;
      heigth: 20%;
    }
  }
`;

export default StyledScreenObjectiveNew;
