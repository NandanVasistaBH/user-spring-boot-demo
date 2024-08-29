import { Link } from 'react-router-dom';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#282c34',
  padding: '1rem',
  fontSize:'32px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
};



const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <Link
        to="/timer"
        style={linkStyle}

      >
        FunTimer
      </Link>
      <Link
        to="/todo"
        style={linkStyle}

      >
        todo
      </Link>
      <Link
        to="/search"
        style={linkStyle}

      >
        search
      </Link>
      <Link
        to="/toggle"
        style={linkStyle}

      >
        toggle
      </Link>
      <Link
        to="/namaskara"
        style={linkStyle}

      >
        namaskara
      </Link>
      <Link
        to="/login"
        style={linkStyle}

      >
        Login
      </Link>
      <Link
        to="/counter"
        style={linkStyle}

      >
        Counter
      </Link>
    </div>
  );
};

export default Navbar;
