import React from 'react';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { IconContext } from 'react-icons';
import { GoChevronLeft } from "react-icons/go";

const NotFoundPage = props => {
    return (
        <div className="container logged-in-container">
            <div className="logged-in-header">
                <h3>Error 404</h3>
                <Button onClick={() => props.history.push('/')}>
                    <IconContext.Provider value={{ size: "2em" }}>
                        <GoChevronLeft />
                    </IconContext.Provider>
                </Button>
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