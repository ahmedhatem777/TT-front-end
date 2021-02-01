import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './sign-up-form.styles.scss';

const SignUpForm = () => {
    return (
        <Card className="card text-white bg-primary sign-up-card">
            <Card.Header> <strong>REGISTER</strong></Card.Header>
            <Card.Body>
                <Form>
                    <div className="form-group">
                        <label> <small>NAME</small></label>
                        <input type="name" className="form-control" placeholder="Your Name" />
                    </div>

                    <div className="form-group">
                        <label> <small>EMAIL</small></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label ><small>PASSWORD</small></label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <label ><small>CONFIRM PASSWORD</small></label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div>
                        <Button className="form-submit-button" variant="secondary" type="submit">SIGN UP</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SignUpForm;