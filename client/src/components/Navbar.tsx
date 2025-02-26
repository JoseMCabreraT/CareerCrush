import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import '../styles/Buttons.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <div className='display-flex justify-space-between align-center py-2 px-5 mint-green'>
      <h1>Career Crush</h1>
      <div>
        {!loginCheck ? (
          <>
            <button className='btn' type='button'>
            <Link to='/signup'>SignUp</Link>
          </button>
          <button className='btn' type='button'>
            <Link to='/login'>Login</Link>
          </button>
          </>
        ) : (
          <><button className="btn" type="button" onClick={() => navigate('/')}>Home</button><button
              className='btn'
              type='button'
              onClick={() => {
                auth.logout();
              } }
            >
              Logout
            </button></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
