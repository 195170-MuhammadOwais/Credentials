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
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                <Link to="/login" className={`btn btn-outline-light mx-2 ${location.pathname === "/login" ? "active" : ""}`} >Login</Link>
                                <Link to="/signup" className={`btn btn-outline-light ${location.pathname === "/signup" ? "active" : ""}`} >Sign Up</Link>
                            </form> :
                            <Link to="/login" onClick={handleLogout} className={`btn btn-outline-light ${location.pathname === "/logout" ? "active" : ""}`} >Logout</Link>
                        }

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar