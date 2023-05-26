import styled from "styled-components";

const StyledIncomesList = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  span {
    font-style: italic;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    li {
      border: 3px solid ${(props) => props.theme.colorBlack};
      border-radius: 5px;
      padding: 10px;
      font-size: 10pt;
      margin: 5px;
      width: 300px;

      .title-content {
        display: flex;
        justify-content: space-between;
        font-weight: bolder;
      }

      .purchase-content,
      .time-content,
      .tax-content,
      .amount-content {
        padding-top: 10px;
      }
    }
  }
`;

export default StyledIncomesList;
