import { Link } from "react-router-dom";

const Login = ({
    showPassword,
    setShowPassword,
    email,
    setEmail,
    password,
    setPassword,
    login,
    setLogin,
    handleLogin,
    setSignin
}) => {
    return (
        <div className="sign">
            <button className="close" onClick={() => setLogin(false)}>
                <Link to={'/'}>
                    <img src="https://i.ibb.co/ChZDfqD/close.png" alt="close" />
                </Link>
            </button>
            <h2>
                Log In
            </h2>
            <div className="login_text">
                Don't have an account?
                <button onClick={() => { setSignin(true); setLogin(false); }}>
                    <Link to={'/signup'}>
                        Sign up
                    </Link>
                </button>
            </div>
            <div className="login_container">
                <div className="login_buttons">
                    <button>
                        <div className="provider_text">
                            Google
                        </div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/LQzDdyY/Google.png" alt="Google" />
                        </div>
                    </button>
                    <button>
                        <div className="provider_text">
                            Facebook
                        </div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/8zRMdWP/Facebook.png" alt="Facebook" />
                        </div>
                    </button>
                    <button>
                        <div className="provider_text">
                            Github
                        </div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/0nNGnKX/Github.png" alt="Github" />
                        </div>
                    </button>
                    <button>
                        <div className="provider_text">
                            Feide
                        </div>
                        <div className="provider_logo">
                            <img src="https://i.ibb.co/xMY6hWP/Feide.png" alt="Feide" />
                        </div>
                    </button>
                </div>
                <p>
                    OR
                </p>
            </div>
            <div className="content">
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="inputs">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className="buttons">
                        <Link to={'/'}>
                            <button type='button'>
                                Forgot Password?
                            </button>
                            <button type='submit' className='ws-green'>
                                Login
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login