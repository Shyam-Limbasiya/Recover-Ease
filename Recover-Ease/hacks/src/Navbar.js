import React, { useState } from 'react';
import './Navbar.css'

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
                    <a href="/">
                        <h1>RecoverEase</h1>
                    </a>
                </div>
                <div className="navbar-buttons">
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <a href="/signup">
                                <button>Sign Up</button>
                            </a>
                            <a href="/login">
                                <button>Log In</button>
                            </a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
