import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signin, setSignin] = useState(false);
  const [login, setLogin] = useState(false);

  const handleSignUp = () => {
    let newUser = {
      Email: email,
      Password: password,
      FirstName: firstName,
      LastName: lastName
    };
    setNewUser(newUser);
  };

  useEffect(() => {
    if (Object.keys(newUser).length > 0) {
      localStorage.setItem('newUser', JSON.stringify(newUser));
    }
  }, [newUser]);


  const handleLogin = () => {
    let newUser = {
      Email: email,
      Password: password
    };
    setUser(newUser);
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <>
      <Navbar setSignin={setSignin} setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={
          <Signup
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            signin={signin}
            setSignin={setSignin}
            handleSignUp={handleSignUp}
            setLogin={setLogin}
          />
        }
        />
        <Route path='/login' element={
          <Login
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            login={login}
            setLogin={setLogin}
            handleLogin={handleLogin}
            setSignin={setSignin}
          />
        } />
        <Route path='/profile' element={
          <ProtectedRoute newUser={newUser}>
            <Profile setUser={setUser} />
          </ProtectedRoute>} />
      </Routes>
      {/* <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-h062m4g0ijc0" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LesdI0mAAAAAOsL4S5ZsqGmaW5VTw6z8bc7_maZ&amp;co=aHR0cHM6Ly9hZG1pbi5mb29keW1hbi5vcmc6NDQz&amp;hl=uz&amp;type=image&amp;v=joHA60MeME-PNviL59xVH9zs&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=d9uq0elx4ic6"></iframe> */}
    </>
  );
}

export default App;
