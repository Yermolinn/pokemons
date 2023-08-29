import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
  margin-top: 60px;
  font-size: 16px;
  width: 100%;
  height: auto;
  padding: 30px 45px;

  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  background: rgba(20, 20, 20, 0.33);
  box-sizing: border-box;
`;

export const Btn = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px 5px;
  color: black;
  background-color: rgba(20, 20, 20, 0.33);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  box-sizing: border-box;
  transition: all 250ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.23);
  }
`;

export const Abilities = styled.div`
  display: flex;
  gap: 10px;

  h3 {
    margin: auto;
    background-color: green;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 12px;
  }
`;
export const Types = styled.div`
  display: flex;
  gap: 10px;

  h3 {
    margin: auto;
    background-color: rgb(251, 164, 43);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
  }
`;
export const BaseStat = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  margin: 30px auto;
`;
