import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({
    showPassword,
    setShowPassword,
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    signin,
    setSignin,
    handleSignUp,
    setLogin
}) => {
    return (
        <div className="sign">
            <button className="close" onClick={() => setSignin(false)}>
                <Link to={'/'}>
                    <img src="https://i.ibb.co/ChZDfqD/close.png" alt="close" />
                </Link>
            </button>
            <h2>Sign Up</h2>
            <div className="login_text">
                Already have an account?
                <button onClick={() => { setLogin(true); setSignin(false); }}>
                    <Link to={'/login'}>
                        Log in
                    </Link>
                </button>
            </div>
            <div className="login_container">
                <div className="login_buttons">
                    <button>
                        <div className="provider_text">Google</div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/LQzDdyY/Google.png" alt="Google" />
                        </div>
                    </button>
                    <button>
                        <div className="provider_text">Facebook</div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/8zRMdWP/Facebook.png" alt="Facebook" />
                        </div>
                    </button>
                    <button>
                        <div className="provider_text">Github</div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/0nNGnKX/Github.png" alt="Github" />
                        </div>
                    </button>
                    <button>
                        <div className="provider_text">Feide</div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/xMY6hWP/Feide.png" alt="Feide" />
                        </div>
                    </button>
                </div>
                <p>OR</p>
            </div>
            <div className="content">
                <form action="">
                    <div className="inputs">
                        <input
                            type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="checkbox" checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <input
                            type="text"
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="buttons">
                        <button type='button' className='ws-green' onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
