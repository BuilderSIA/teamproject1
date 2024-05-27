import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

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
        <Route path='/signup' element={signin && (
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
        )}
        />
        <Route path='/login' element={login && (
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
        )} />
      </Routes>
    </>
  );
}

export default App;
