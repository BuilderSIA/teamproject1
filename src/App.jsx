import { useState } from 'react'
import './App.css'

function App() {
  // const [email, setEmail] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h2>
        Log In
      </h2>
      <div className="login_text">
        Don't have an account?
        <span>
          Sign up
        </span>
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
        <form action="">
          <div className="inputs">
            <input type="text" placeholder='Email' />
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' />
            <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
          </div>
          <div className="buttons">
            <button type='button'>
              Forgot Password?
            </button>
            <button type='submit' className='primary'>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
