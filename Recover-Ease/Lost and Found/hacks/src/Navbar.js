import React, { useState } from 'react';
import './Navbar.css'
import Link from 'react-router-dom'

function Navbar() {
    // Assuming user authentication state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Logic for logging out the user
        setIsLoggedIn(false);
    };

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-title">
                    <h1>RecoverEase</h1>
                </div>
                <div className="navbar-buttons">
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button>
                                <Link to="/signup" className='nav-link'>
                                    Sign-up
                                </Link>
                            </button>
                            <button>Log In</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
