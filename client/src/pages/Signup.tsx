import { useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth';
import { signup } from "../api/authAPI";
import type { Usersignup } from "../interfaces/UserLogin";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<Usersignup>({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage(""); 
    try {
      const idToken = await signup(signupData); 
      console.log('idToken', idToken)
      Auth.Signup(idToken.token); 
      setSuccessMessage("Signup successful! Welcome!"); 
      navigate("/");
    } catch (err) {
      setError("Failed to Signup. Please try again.");
      console.error("Failed to Signup", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form login-form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        {error && <p className="error">{error}</p>}
        {successMessage && (
          <>
            <p className="success">{successMessage}</p> {/* Display success message */}
            <input
              type="text"
              value={successMessage}
              readOnly
              className="form-input success-confirmation"
              style={{ marginTop: '10px' }} 
            />
          </>
        )}
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            id="username"
            value={signupData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={signupData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={signupData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

