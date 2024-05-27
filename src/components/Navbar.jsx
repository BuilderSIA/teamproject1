const Navbar = ({ setSignin, setLogin }) => {
    return (
        <div className="header">
            <div className="nav-top">
                <div className="logo">
                    <a href="./" alt="logo">
                        <img src="https://picsum.photos/75/28" alt="Logo" />
                    </a>
                </div>
                <div className="search">
                    <input type="search" placeholder="Search…" />
                    <span className="search-icon material-symbols-outlined">search</span>
                </div>
                <div className="mode">
                    <i></i>
                </div>
                <div className="signButtons">
                    <button className='ws-green signUp' onClick={() => { setSignin(true); setLogin(false); }}>
                        Sign Up
                    </button>
                    <button className='login' onClick={() => { setLogin(true); setSignin(false); }}>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
