import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled, FlexUl } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <FlexUl>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/add">Add User</NavLinkStyled>
            </li>
          </FlexUl>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
