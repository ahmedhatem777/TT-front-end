import React, {useState, useEffect} from 'react';
import Modal from '../modal/modal.component';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/avatar_placeholder.png';
import axios from 'axios';
import './edit-profile-form.styles.scss';
axios.defaults.withCredentials = true;

const EditProfileForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState('');

    useEffect( () => {
        axios.get('http://localhost:4000/users/me')
        .then( ({data}) => {
            setName(data.name);
            setAge(data.age);
            setEmail(data.email);
        })
        .catch( err => console.log(err) );
    }, [])

    return (
        <>
            <Form onSubmit={ props.onSubmit }>
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
                            {/* <Figure.Caption className="effen-figure-caption">
                                <Form.Group className="d-flex justify-content-center text-center">
                                    <Form.File id="exampleFormControlFile1" />
                                </Form.Group>
                            </Figure.Caption> */}
                        </Figure>
                    </div>
                </div>

                <div className="col-12 col-md-9 col-lg-9 profile-col">
                    <Form.Group>
                        <Form.Label><small><b>NAME:</b></small></Form.Label>
                        <Form.Control 
                            value={name}
                            onChange={ e => setName(e.target.value) } 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><small><b>EMAIL:</b></small></Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 

                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><small><b>AGE:</b></small></Form.Label>
                        <Form.Control 
                            type="number"
                            value={age} 
                            onChange={e => setAge(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label><small><b>NEW PASSWORD:</b></small></Form.Label>
                        <Form.Control 
                            type="password" 
                            minLength="7" 
                            placeholder="New password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label><small><b>CONFIRM NEW PASSWORD:</b></small></Form.Label>
                        <Form.Control
                            required={password !== ''? true : false}
                            type="password"  
                            placeholder="Confirm new password" 
                            onChange={
                                e => {
                                    e.target.value !== password ?
                                        e.target.setCustomValidity(`Passwords don't match!`)
                                        :
                                        e.target.setCustomValidity('')
                                }
                            }
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label><small><b>PROFILE AVATAR:</b></small></Form.Label>
                        <Form.File id="exampleFormControlFile1" />
                    </Form.Group>

                    <div>
                        <Button
                            className="submit-edit-button"
                            type="submit"
                            variant="info"
                        >
                            SUBMIT CHANGES
                        </Button>
                    </div>

                </div>
            </div>
        </Form>  
        

                <Modal
                    show={props.show}
                    onHide={props.onHide}
                    onClick={() => props.onClick(name, email, age, password)}
                    heading={props.heading}
                    buttonVariant={props.buttonVariant}
                    buttonName={props.buttonName}
                />
        </>   
    )
}


export default EditProfileForm;
