import { useState, type FormEvent, type ChangeEvent } from 'react';
import {useNavigate} from 'react-router-dom';
import Auth from '../utils/auth';
import { signup } from '../api/authAPI';
import type { Usersignup } from '../interfaces/UserLogin'; 

const Signup = () => {
  const navigate = useNavigate();  
  const [signupData, setSignupData] = useState<Usersignup>({
    username: '',
    email: '',
    password: '',
  });
 
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignupData({
          ...signupData,
          [name]: value,
        });
      };
const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signup(signupData);
      Auth.login(data.token);
      navigate ('/');

    } catch (err) {
      console.error('Failed to Signup', err);
    }
  };

return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className='form-group'>
          <label>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={signupData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>-
          <label>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            value={signupData.email || ''}
            onChange={handleChange}
          />
        </div>
       
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={signupData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit' >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
