import { useLocation } from 'react-router-dom';
import { Navlink } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('details') && (
        <nav>
          <ul>
            <li>
              <Navlink to="/">Main</Navlink>
            </li>
            <li>
              <Navlink to="/events">Events</Navlink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
