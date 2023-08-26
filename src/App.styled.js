import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 30px auto;
  padding: 0 15px;
  text-align: center;
  width: 320px;

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const Title = styled.h1`
  color: #213547;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 60px;

  font-size: 28px;

  @media screen and (min-width: 1280px) {
    font-size: 34px;
  }
`;
