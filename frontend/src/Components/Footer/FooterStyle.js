import styled from "styled-components";

export const Wrapper1 = styled.div`
  background-color: #3f414d;
  color: #fff;
  font-weight: 900;
  width: 98.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
`;

export const DivOne = styled.div`
  font-size: 1.2rem;
  width: 50vw;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 18rem;
@media screen and (max-width:500px){
  margin-left: 1rem;
}
  .logoOne {
    font-size: 1rem;
    position: absolute;
    left: -30px;
    top: 18px;
  }
  .inputType {
    border: none;
    background-color: #3f414d;
    border-bottom: 2px solid #fff;
    padding: 5px 35px;
    margin-right: 10px;
    margin-left: -30px;
  }
  .btnType {
    padding: 8px 8px;
    background-color: #3f414d;
    color: #fff;
    border: 1px solid #fff;
  }
`;

export const DivThree = styled.div`
  font-size: 14px;
  position: relative;
  margin-top: 20px;
  width: 50vw;
  margin-bottom: 20px;
  .logoFive {
    position: absolute;
    left: -2rem;
    top: 15px;
  }
`;

export const Wrapper3 = styled.div`
  display: flex;
  width: 98.8vw;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 0px;
  font-weight: 900;
  font-size: 14px;
  .logo {
    font-size: 22px;
    display: flex;
    justify-content: center;
    column-gap: 20px;
  }
`;

export const Wrapper4 = styled.div`
  text-align: center;
  background-color:  #3f414d;
  font-size: 14px;
  padding: 10px 0px;
  width: 98.8vw;
  color: #fff;
  .policy {
    display: flex;
    justify-content: center;
    column-gap: 30px;
  }
  .policy2 {
    font-size: 12px;
    margin-top: -15px;
  }
`;
