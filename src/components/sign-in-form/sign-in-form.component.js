import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './sign-in-form.styles.scss';

const SignInForm = () => {
    return (
        <Card className="card text-white bg-primary sign-in-card">
            <Card.Header> <strong>SIGN IN</strong></Card.Header>
            <Card.Body>
                <Form>
                    <div className="form-group">
                        <label> <small>EMAIL</small></label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label ><small>PASSWORD</small></label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div>
                        <Button className="form-submit-button" variant="secondary" type="submit">SIGN IN</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SignInForm;