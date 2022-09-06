import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
        props.showAlert(`Logged out Successfully!`, "warning");
    }


    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">React-Task</Link>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        {!localStorage.getItem('token') ?
                            <form className='d-flex'>
                                <div className={`form-check form-switch mx-2 my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}
                                        style={{ cursor: 'pointer' }} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                                </div>
                                <Link to="/login" className={`btn btn-dark mx-2 ${location.pathname === "/login" ? "active" : ""} text-outline-${props.mode === 'light' ? 'dark' : 'light'} `} >Login</Link>
                                <Link to="/signup" className={`btn btn-dark ${location.pathname === "/signup" ? "active" : ""} text-outline-${props.mode === 'light' ? 'dark' : 'light'} `} >Sign Up</Link>
                            </form> :
                            <Link to="/login" onClick={handleLogout} className={`btn btn-dark ${location.pathname === "/logout" ? "active" : ""} text-outline-${props.mode === 'light' ? 'dark' : 'light'} `} >Logout</Link>
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar