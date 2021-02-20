import React, {useState, useEffect} from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/avatar_placeholder.png';
import axios from 'axios';
import './show-profile.styles.scss';
axios.defaults.withCredentials = true;

const ShowProfilePage = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [tasks, setTasks] = useState(0);
    const [completedTasks, setComTasks] = useState('');
    const [joinedAt, setJoinedAt] = useState('');
    const [userAvatar, setAvatar] = useState(false);

    useEffect( () => {
        Promise.all([
            axios.get('http://localhost:4000/users/me'),
            axios.get('http://localhost:4000/tasks')
        ])
        .then( res => {
            console.log(res[0].data)
            setName(res[0].data._doc.name);
            setEmail(res[0].data._doc.email);
            setAge(res[0].data._doc.age);
            setJoinedAt(new Date(res[0].data._doc.createdAt).toDateString());
            setAvatar(res[0].data.hasAvatar);
            setTasks(res[1].data.length);
            setComTasks( res[1].data.filter( task => task.completed === true ).length);
        })
        .catch( err => console.log(err))
    }, [])
 
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
                            src={ userAvatar ? 'http://localhost:4000/users/me/avatar' : avatar}
                            rounded  
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
                            <p>{name}</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>EMAIL:</b></small></p>
                            <p>{email}</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>AGE:</b></small></p>
                            <p>{age}</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>TASKS:</b></small></p>
                            <p>{tasks}</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>COMPLETED TASKS:</b></small></p>
                            <p>{completedTasks}</p>
                        </div>

                        <div className="my-form-group">
                            <p className="info-label"><small><b>JOINED:</b></small></p>
                            <p>{joinedAt}</p>
                        </div>

                        <div className="edit-info-button">
                            <Button size="sm" onClick={() => props.history.push('/settings/editprofile')}>EDIT INFO</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProfilePage;
