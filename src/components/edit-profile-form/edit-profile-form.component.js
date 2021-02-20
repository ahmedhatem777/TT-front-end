import React, {useState, useEffect} from 'react';
import Modal from '../modal/modal.component';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import avatar from '../../assets/avatar_placeholder.png';
import axios from 'axios';
import './edit-profile-form.styles.scss';
axios.defaults.withCredentials = true;

const EditProfileForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [password, setPassword] = useState('');
    const [userAvatar, setAvatar] = useState(false);
    const [uploadResponse, setUploadRes] = useState('');
    const [deleteAvatar, setDeleteAvatar] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:4000/users/me')
            .then(({ data }) => {
                setName(data._doc.name);
                setAge(data._doc.age);
                setEmail(data._doc.email);
                setAvatar(data.hasAvatar);
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
                                disabled
                                width={200}
                                height={200}
                                alt="200x200"
                                src={userAvatar ? 'http://localhost:4000/users/me/avatar' : avatar}
                                rounded
                            />
                            {
                                userAvatar &&
                                    <Figure.Caption className="effen-figure-caption">
                                        <Form.Group className="d-flex justify-content-center text-center">
                                            <Button 
                                                size="sm" 
                                                variant="secondary"
                                                onClick={() => setDeleteAvatar(!deleteAvatar)}
                                            >
                                                <small><b>{deleteAvatar ? 'Undo' : 'Remove Avatar'}</b></small>
                                            </Button>
                                        </Form.Group>
                                    </Figure.Caption>
                            }
                            
                        </Figure>
                    </div>
                </div>

                <div className="col-12 col-md-9 col-lg-9 profile-col">
                    <Form.Group>
                        <Form.Label><small><b>NAME:</b></small></Form.Label>
                        <Form.Control 
                            required
                            value={name}
                            maxLength="64"
                            onChange={e => setName(e.target.value) } 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><small><b>EMAIL:</b></small></Form.Label>
                        <Form.Control 
                            required
                            type="email" 
                            maxLength="254"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 

                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><small><b>AGE:</b></small></Form.Label>
                        <Form.Control
                            required
                            type="number"
                            max="123"
                            value={age} 
                            onChange={e => setAge(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label><small><b>NEW PASSWORD:</b></small></Form.Label>
                        <Form.Control 
                            type="password" 
                            minLength="7"
                            maxLength="64"
                            placeholder="New password" 
                            value={password} 
                            onChange={
                                e => {
                                    setPassword(e.target.value);
                                    const passCon = document.getElementById('password-confirmation');
                                    if (passCon.value !== password) {
                                        passCon.setCustomValidity(`Passwords don't match!`);
                                    }
                                    else {
                                        passCon.setCustomValidity('')
                                    } 
                                }
                            } 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label><small><b>CONFIRM NEW PASSWORD:</b></small></Form.Label>
                        <Form.Control
                            required={password !== '' ? true : false}
                            type="password" 
                            id="password-confirmation"
                            maxLength="64"
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
                            <div >
                            <Form.File
                                id="exampleFormControlFile1"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={e => {
                                    let form_data = new FormData();
                                    form_data.append('avatar', e.target.files[0]);
                                    axios.post('http://localhost:4000/users/me/avatar', form_data,
                                        {
                                            headers: {
                                                'content-type': 'multipart/form-data'
                                            }
                                        })
                                        .then(res => setUploadRes(res.data))
                                        .catch(err => setUploadRes(err.response.data.error));
                                    }
                                } 
                            />
                            {
                                !!uploadResponse &&
                                    <Alert size="sm" variant="info" className="avatar-upload-group">
                                        {uploadResponse}
                                    </Alert>
                            }
                        </div>
                        
                    </Form.Group>

                    <div>
                        {
                            !!props.editAlert &&
                                <Alert variant="danger" className="text-center">
                                    {props.editAlert}
                                </Alert>
                        }
                        <Button
                            className="submit-edit-button"
                            type="submit"
                            variant="info"
                        >
                                {
                                    props.editButtonLoad ?
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                        :
                                        'SUBMIT CHANGES'
                                }
                        </Button>
                    </div>

                </div>
            </div>
        </Form>  
        
                <Modal
                    show={props.show}
                    onHide={props.onHide}
                    onClick={() => props.onClick(name, email, age, password, deleteAvatar)}
                    heading={props.heading}
                    buttonVariant={props.buttonVariant}
                    buttonName={props.buttonName}
                />
        </>   
    )
}


export default EditProfileForm;
