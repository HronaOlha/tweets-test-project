import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;

  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #8b7edc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  color: #373737;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  &.active {
    color: #ffc02e;
  }
`;
