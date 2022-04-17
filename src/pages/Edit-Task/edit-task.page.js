import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { IconContext } from 'react-icons';
import { GoChevronLeft } from "react-icons/go";
import UserContext from '../../userContext';
import SyncLoader from "react-spinners/SyncLoader";
import './edit-task.styles.scss';
axios.defaults.withCredentials = true;

class EditTaskPage extends React.Component {
    state = {
        title: '',
        description: '',
        completed: undefined,
        editTaskAlert: '',
        editButtonLoad: false,
        fetchingTask: true
    }

    componentDidMount = () => {
        axios.get(`https://task-manager-api-omega.vercel.app/tasks/${this.props.match.params.id}`)
            .then( ({data}) => {
                this.setState( () => ({
                    title: data.title,
                    description: data.description,
                    completed: data.completed,
                    fetchingTask: false
                }))
            })
            .catch(err => {
                if (err.response) {
                    err.response.status === 401 ? this.context.setLoggedIn(false)
                        :
                    this.setState(() => ({ editTaskAlert: err.response.data, fetchingTask: false }));
                }
            })
    }

    handleSubmitEdit = () => {
        this.setState( () => ({ editButtonLoad: true }) );
        const title = this.state.title;
        const description = this.state.description;
        const completed = this.state.completed;

        axios.patch(`https://task-manager-api-omega.vercel.app/tasks/${this.props.match.params.id}`, 
        {title, description, completed})
            .then( res => this.props.history.push('/dashboard'))
            .catch(err => { 
                if(err.response) {
                    err.response.status === 401 ? this.context.setLoggedIn(false) 
                        :
                    this.setState( () => ({ editTaskAlert: err.response.data, editButtonLoad: false }) );
                }
            })
    }

    render() {
        if (this.state.fetchingTask) return (
            <div className="loading-info">
                <SyncLoader color={'black'} loading={true} size={10} />
            </div>
        ) 
        return (
            <div className="container logged-in-container">

                <div className="logged-in-header">
                    <h3>EDIT TASK:</h3>
                    <Button onClick={ () => this.props.history.goBack()}>
                            <IconContext.Provider value={{ size: "2em" }}>
                                <GoChevronLeft />
                            </IconContext.Provider>
                    </Button>
                </div>

                <Card className="text-white bg-primary add-task-card">
                    <Card.Body>
                        <Form onSubmit={e => { e.preventDefault(); this.handleSubmitEdit(); }}>
                            <Form.Group >
                                <Form.Label><small>TITLE</small></Form.Label>
                                <Form.Control 
                                    required
                                    maxLength="100"
                                    value={this.state.title}
                                    onChange={e => this.setState(() => ({title: e.target.value}) )}
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label><small>DESCRIPTION</small></Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={3}
                                    maxLength="360"
                                    className="description-text-area"
                                    value={this.state.description}
                                    onChange={e => this.setState(() => ({ description: e.target.value }) )}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><small>STATE</small></Form.Label>
                                <Form.Control 
                                    as="select" 
                                    value={this.state.completed ? "Completed" : "Not Done Yet"} 
                                    className="mr-sm-2"
                                    onChange={
                                        e => { 
                                            this.setState(() => (
                                                { completed: (e.target.value === "Completed") ? true : false}
                                            ))
                                        }
                                    }>
                                    <option>Completed</option>
                                    <option>Not Done Yet</option>
                                </Form.Control>
                            </Form.Group>

                            <div>
                                {!!this.state.editTaskAlert &&
                                    <Alert variant="danger" className="text-center">
                                    {this.state.editTaskAlert}
                                    </Alert>
                                }
                                <Button
                                    className="form-submit-button"
                                    variant="info"
                                    type="submit"
                                >
                                    {
                                        this.state.editButtonLoad ?
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                        :
                                            'EDIT TASK'
                                    }
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

EditTaskPage.contextType = UserContext;

export default EditTaskPage;
