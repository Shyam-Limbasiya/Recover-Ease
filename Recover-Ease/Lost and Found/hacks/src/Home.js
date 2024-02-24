import React from 'react';
import './Home.css'; // Import your CSS file for styling

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1 className='welcome'>Welcome to RecoverEase</h1>
                <p>Your solution for lost and found tracking</p>
                <button className="get-started-button">Get Started</button>
            </div>
        </div>
    );
}

export default Home;
