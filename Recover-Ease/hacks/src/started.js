// Started.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './started.css';
import login from './img/login.jpg'
import list from './img/list.jpg'
import notification from './img/notification.jpg'
 // Make sure you have react-bootstrap installed and imported

function Started() {
    return (
        <div data-aos="fade-left" className='start'>
            <Container fluid>
                <div className="total-about">
                    <div className="about-heading">
                        <h6 className="section-heading">How it works ⚒️?</h6>
                    </div>
                    <div className="about-card">
                        <div className="info">
                            <img
                                src={login}
                                style={{ width: "200px", height: "200px" }}
                                alt=""
                            />
                            <h4>Create an account</h4>
                            <p>Initially, you have to create an account to get started.</p>
                            <a href="/login">
                                <Button variant="custom" size="lg">
                                    Log in
                                </Button>
                            </a>
                        </div>
                        <div className="info">
                            <img
                                src={list}
                                style={{ width: "200px", height: "200px" }}
                                alt=""
                            />
                            <h4>List Lost/Found Item</h4>
                            <p>
                                List your item on the wall by filling certain details and
                                image. That's it !
                            </p>
                        </div>
                        <div className="info">
                            <img
                                src={notification}
                                style={{ width: "200px", height: "200px" }}
                                alt=""
                            />
                            <h4>Get Notified</h4>
                            <p>
                                Once anyone posts an item, we make our registered users aware
                                about the same by sending notification .
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Started;
