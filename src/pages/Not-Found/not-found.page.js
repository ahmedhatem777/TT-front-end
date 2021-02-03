import React from 'react';
import Figure from 'react-bootstrap/Figure';

const NotFoundPage = () => {
    return (
        <div className="container logged-in-container">
            <div className="logged-in-header">
                <h3>Error 404: Page not found</h3>
            </div>

            <div className="d-flex justify-content-center">
                <Figure>
                    <Figure.Image
                        width={400}
                        height={400}
                        alt="200x200"
                        src="https://i.pinimg.com/originals/ef/4c/23/ef4c232dab28b7581497cee047f21969.gif"
                    />
                </Figure>
            </div>
        </div>
    )
}

export default NotFoundPage;