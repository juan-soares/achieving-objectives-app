import styled from "styled-components";

const StyledScreenLogin = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  img {
    width: 50%;
    object-fit: cover;
  }

  .form-container {
    font-family: "Poppins", sans-serif;
    width: 50%;
    background-color: ${(props) => props.theme.colorBlack};
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      border-radius: 10px;
      box-shadow: 5px 5px 20px black;
      background-color: ${(props) => props.theme.colorWhite};
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 450px;
      width: 450px;
      justify-content: space-between;

      @media (max-width: 950px) {
        height: 70%;
        width: 90%;
      }

      h2 {
        color: ${(props) => props.theme.colorPink};
        font-size: 30pt;
        font-weight: bolder;
        margin-top: 15px;
      }

      form {
        display: flex;
        flex-direction: column;
        width: 60%;

        input,
        label {
          padding: 5px;
          margin: 2px;
        }

        input {
          font-style: italic;
        }

        button {
          margin-top: 20%;
          padding: 15px;
          font-size: 13pt;
          background-color: ${(props) => props.theme.colorPink};
          border: #f2cd13;
          color: white;
        }
        button:hover {
          background-color: ${(props) => props.theme.colorGreen};
          cursor: pointer;
          border: #f26b76;
          transition: 0.5s;
        }
      }

      p {
        margin-bottom: 50px;
        padding-top: 30px;
        font-size: 10pt;
        text-align: center;
      }
    }
  }
`;

export default StyledScreenLogin;
