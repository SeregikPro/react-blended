import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 24px;
  margin-bottom: 50px;
  border-bottom: 2px solid #eee0dd;
  box-shadow: 4px 0 4px 4px #eee0dd;
`;

export const FlexUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16;
  margin: 0;
  padding: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  color: black;
  border-top: 2px dotted transparent;
  border-bottom: 2px dotted transparent;

  :hover {
    color: gray;
  }

  &.active {
    font-weight: 700;
    color: green;
    border-top: 2px dotted green;
    border-bottom: 2px dotted green;
  }
`;
