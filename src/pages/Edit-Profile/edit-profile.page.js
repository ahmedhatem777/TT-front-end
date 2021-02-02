import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/avatar_placeholder.png';
import './edit-profile.styles.scss';

const EditProfilePage = (props) => {
    return (
        <div className="container logged-in-container">
            <div className="logged-in-header">
                <h3>Edit PROFILE:</h3>
            </div>

            <Form>
            <div className="row justify-content-around align-items-center text-white edit-profile-row">
                <div className="col-12 col-md-3 col-lg-3 d-flex justify-content-center">
                    <div>
                            <Figure className="effen-figure">
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    alt="200x200"
                                    src={avatar}
                                    thumbnail
                                />
                                <Figure.Caption>
                                    {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                                    <Form.Group>
                                        <Form.File className="effen-figure-caption" id="exampleFormControlFile1" />
                                    </Form.Group>
                                </Figure.Caption>
                            </Figure>
                    </div>
                        
                </div>

                {/* <div className="col-12 col-md-9 col-lg-9 d-flex justify-content-center justify-content-md-start justify-content-lg-start profile-col"> */}
                    <div className="col-12 col-md-9 col-lg-9 profile-col">

                        <Form.Group>
                            <Form.Label><small><b>NAME:</b></small></Form.Label>
                            <Form.Control defaultValue="Ahmed Hatem" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><small><b>EMAIL:</b></small></Form.Label>
                            <Form.Control type="email" defaultValue="ahmedhatem777@hotmail.com" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><small><b>AGE:</b></small></Form.Label>
                            <Form.Control type="number" defaultValue="23" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><small><b>TASKS:</b></small></Form.Label>
                            <Form.Control type="number" defaultValue="69" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><small><b>PASSWORD: <small>(for confirmation)</small></b></small></Form.Label>
                            <Form.Control type="password" placeholder="Your password" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label><small><b>NEW PASSWORD:</b></small></Form.Label>
                            <Form.Control type="password" placeholder="New password"/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label><small><b>CONFIRM NEW PASSWORD:</b></small></Form.Label>
                            <Form.Control type="password" placeholder="Confirm new password"/>
                        </Form.Group>

                        <div>
                            <Button 
                                className="submit-edit-button"
                                type="submit"
                                onClick={(e) => { e.preventDefault(); props.history.push('/showprofile'); }}
                                variant="secondary"
                            >
                                SUBMIT CHANGES
                            </Button>
                        </div>
                    
                </div>
            </div>
            </Form>
        </div>
    )
}

export default EditProfilePage;
