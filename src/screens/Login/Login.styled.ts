import styled from "styled-components";

const StyledScreenLogin = styled.div`
  @font-face {
    font-family: "Poppins", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap");
  }

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
    background-color: #4d5159;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      width: 50p%;
      height: 50%;
    }

    div {
      border-radius: 10px;
      box-shadow: 5px 5px 20px black;
      background-color: #ece9d6;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 450px;
      width: 450px;
      justify-content: space-between;

      h2 {
        color: #f26b76;
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
          margin-top: 50px;
          padding: 15px;
          font-size: 13pt;
          background-color: #f26b76;
          border: #f2cd13;
          color: white;
        }
        button:hover {
          background-color: #a5d936;
          cursor: pointer;
          border: #f26b76;
          transition: 0.5s;
        }
      }

      p {
        margin-bottom: 30px;
        padding-top: 30px;
        font-size: 10pt;
      }
    }
  }
`;

export default StyledScreenLogin;
