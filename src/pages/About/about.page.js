import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './about.styles.scss';

const AboutPage = () => {
    return (
        <div className="logged-in-container">
            <div className="my-tron">
                <Jumbotron >
                    <h1 className="display-3">What's it about!</h1>
                    <p className="lead">Well, this is a simple web-application that showcases my skills and the technologies that I know and have worked with.</p>
                    <hr className="my-4" />
                    <p><strong>* What does it do?</strong></p>
                    <p>This web-application is a task/bug tracker, where you can sign in, add your tasks, edit them or delete them and more.</p>
                    <p><strong>* How was it created?</strong></p>
                    <p>The web-app was made in the node environment, the back-end server is made with Express, the database is made with MongoDB and the front-end with ReactJS.</p>
                </Jumbotron>
            </div>
        </div>
    )
}

export default AboutPage;