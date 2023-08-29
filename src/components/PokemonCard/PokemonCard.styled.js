import styled from "@emotion/styled";

export const Card = styled.div`
  width: 300px;
  background-color: #213547;
  border-radius: 5px;
  border: 2px rgb(55, 227, 236) solid;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  transition: all 250ms;

  :hover {
    scale: 1.05;
  }

  a{
    text-align: left;
  }
`;
