import { Link } from "react-router-dom";

const Navbar = ({ setSignin, setLogin }) => {
    return (
        <div className="header">
            <div className="nav-top">
                <div className="logo">
                    <Link to={'/'}>
                        <img src="https://picsum.photos/75/28" alt="Logo" />
                    </Link>
                </div>
                <div className="search">
                    <input type="search" placeholder="Search…" />
                    <span className="search-icon material-symbols-outlined">search</span>
                </div>
                <div className="mode">
                    <i></i>
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
