import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './sign-up-form.styles.scss';

const SignUpForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Card className="card text-white bg-primary sign-up-card">
            <Card.Header> <strong>REGISTER</strong></Card.Header>
            <Card.Body>
                <Form onSubmit={e => { e.preventDefault(); props.handleSignUp(name,email,password); }}>
                    <div className="form-group">
                        <label> <small>NAME</small></label>
                        <input
                            required 
                            type="name"
                            className="form-control" 
                            placeholder="Your Name"
                            value={name}
                            onChange={ e => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label> <small>EMAIL</small></label>
                        <input 
                            required
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label ><small>PASSWORD</small></label>
                        <input
                            required
                            minLength="7"
                            type="password"
                            className="form-control" 
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label ><small>CONFIRM PASSWORD</small></label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={
                                e => {
                                    e.target.value !== password?
                                        e.target.setCustomValidity(`Passwords don't match!`)
                                    :
                                        e.target.setCustomValidity('')
                                }
                            }/>
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