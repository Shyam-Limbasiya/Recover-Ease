import React from 'react';
import './Home.css'; // Import your CSS file for styling
import './Navbar.js'
import { Container, Row, Button, Form } from "react-bootstrap";
import Started from './started.js'

function Home() {
    return (
        <>
            <div className="home">
                <div className="home-content">
                    <h1>Welcome to RecoverEase</h1>
                    <p>Lost it😕. List it📃. Find it🤩.</p>
                    <p>Your solution for lost and found tracking</p>
                    <a href="/start">
                        <button className="get-started-button">Get Started</button>
                    </a>
                </div>
                
            </div>
        <Started/>
        </>
    
    );
}

export default Home;
