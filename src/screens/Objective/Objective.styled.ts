import styled from "styled-components";

const StyledScreenObjective = styled.div`
  .content-container {
    margin-left: 25%;

    h2 {
      font-size: 30pt;
      padding-top: 20px;
      color: ${(props) => props.theme.colorGreen};
    }

    label {
      font-weight: bolder;
    }

    .labels-container {
      display: flex;
      justify-content: space-around;
    }

    p {
      font-style: italic;
      padding: 30px 0;
    }

    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: end;
      margin: 5px 10px;

      button {
        padding: 5px;
        margin: 2px;
        border-radius: 5px;
        background-color: ${(props) => props.theme.colorGrey};
        border-color: ${(props) => props.theme.colorGrey};

        :hover {
          cursor: pointer;
          color: white;
          background-color: ${(props) => props.theme.colorPink};
          border-color: ${(props) => props.theme.colorPink};
        }
      }
    }
  }
`;

export default StyledScreenObjective;
