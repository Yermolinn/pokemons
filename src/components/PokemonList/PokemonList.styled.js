import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
export const LinkCard = styled(Link)`
  color: antiquewhite;
  font-weight: 500;

  :hover {
    color: rgb(55, 227, 236);
  }
`;
