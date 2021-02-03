import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/avatar_placeholder.png';
import './show-profile.styles.scss';

const ShowProfilePage = (props) => {
    return (
        <div className="container logged-in-container">
            <div className="logged-in-header">
                <h3>YOUR PROFILE:</h3>
            </div>
            
            <div className="row justify-content-around align-items-center profile-row">
                <div className="col-12 col-md-3 col-lg-3 d-flex justify-content-center justify-content-md-start justify-content-lg-start">
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="200x200"
                            src={avatar}
                            thumbnail
                        />
                        <Figure.Caption>
                            {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                        </Figure.Caption>
                    </Figure>
                </div>

                <div className="col-12 col-md-9 col-lg-9 d-flex justify-content-center justify-content-md-start justify-content-lg-start profile-col">
                    <div>
                        <div className="my-form-group">
                            <p className="info-label"><small><b>NAME:</b></small></p>
                            <p>Ahmed Hatem</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>EMAIL:</b></small></p>
                            <p>ahmedhatem777@hotmail.com</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>AGE:</b></small></p>
                            <p>23</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>TASKS:</b></small></p>
                            <p>69</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>COMPLETED TASKS:</b></small></p>
                            <p>69</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>JOINED:</b></small></p>
                            <p>30 October, 1997</p>
                        </div>

                        <div className="edit-info-button">
                            <Button size="sm" onClick={() => props.history.push('/editprofile')}>EDIT INFO</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProfilePage;
