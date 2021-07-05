/** @format */
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navbar({ privatPage }) {
  return (
    <>
      <Nav fill variant='tabs' defaultActiveKey='/'>
        {!privatPage && (
          <Nav.Item>
            <Link to='/'>Login</Link>
          </Nav.Item>
        )}
        {privatPage && (
          <Nav.Item>
            <Link to='/game'> Game</Link>
          </Nav.Item>
        )}
        {privatPage && (
          <Nav.Item>
            <Link to='/logout'>Logout 
             </Link>
         

          </Nav.Item>
        )}
      </Nav>
    </>
  );
}

export default Navbar;
