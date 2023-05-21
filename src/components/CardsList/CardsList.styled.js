import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: flex;
  place-items: center;
  position: absolute;
  top: 132px;
  left: 24px;
  border: none;
  cursor: pointer;
  padding: 14px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  background-color: #888;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  &:hover {
    background-color: #595959;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 24px;
`;

export const Button = styled.button`
  width: 196px;
  border: none;
  cursor: pointer;
  padding: 14px 0;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  background-color: #888;

  &:hover {
    background-color: #595959;
  }
`;

export const Message = styled.div`
  width: 196px;
  border: none;
  padding: 14px 0;
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  text-align: center;
`;
