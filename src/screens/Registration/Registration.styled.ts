import styled from "styled-components";

const StyledScreenRegistration = styled.div`
  background-color: ${(props) => props.theme.colorBlack};
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;

  div {
    background-color: ${(props) => props.theme.colorWhite};
    width: 30%;
    height: 80%;
    margin: 10%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    @media (max-width: 900px) {
        width: 60%;
        height: 80%;
        margin: auto;
      }
   
   h2{
     color: ${(props) => props.theme.colorPink};
     font-size: 25pt;
     text-align: center;
     margin-bottom: 30px;
     }
     
    form{
      display: flex;
      flex-direction: column;
      width: 60%;
      
      label{
        font-weight: bold;
      }
      
      label, input {
        padding: 5px;
      }
      
      input {
        margin-top: 5px;
        font-style: italic;
      }
      
      span{
        margin-top: 5px;
            font-style: italic;
    font-size: 8pt;
        color: red;
      }
      
      button{
        font-size: 12pt;
        margin-top: 50px;
        padding: 10px;
          }
      
      button:enabled{
          color: white;
        background-color: ${(props) => props.theme.colorPink};
    border-color: ${(props) => props.theme.colorPink};
  
      }
      
      button:enabled:hover{
        cursor: pointer;
        background-color: ${(props) => props.theme.colorGreen};
        border-color: ${(props) => props.theme.colorGreen};
        transition: 0.5s;
       }

     
    }
      a{
        margin-top: 30px;
         color: ${(props) => props.theme.colorBlack};
       }
       
      a:hover{
         color: ${(props) => props.theme.colorGreen};
       }
    
`;

export default StyledScreenRegistration;
