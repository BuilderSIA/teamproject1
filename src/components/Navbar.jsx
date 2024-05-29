import { Link } from "react-router-dom";

const Navbar = ({ setSignin, setLogin }) => {
    return (
        <div className="header">
            <div className="nav-top">
                <div className="logo">
                    <a href="./">
                        <img src="https://picsum.photos/75/28" alt="Logo" />
                    </a>
                </div>
                <nav className="bar">
                    <Link to={'/'} className="bar-item">
                        Home
                    </Link>
                    <Link to={'/profile'} className="bar-item">
                        Profile
                    </Link>
                    <Link to={'/about'} className="bar-item">
                        About
                    </Link>
                    <Link to={'/contact'} className="bar-item">
                        Contact
                    </Link>
                </nav>
                <div className="search">
                    <input type="search" placeholder="Search…" />
                    <span className="search-icon material-symbols-outlined">search</span>
                </div>
                <div className="signButtons">
                    <Link to={'/signup'}>
                        <button className='ws-green signUp' onClick={() => { setSignin(true); setLogin(false); }}>
                            Sign up
                        </button>
                    </Link>
                    <Link to={'/login'}>
                        <button className='login' onClick={() => { setLogin(true); setSignin(false); }}>
                            Log in
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
