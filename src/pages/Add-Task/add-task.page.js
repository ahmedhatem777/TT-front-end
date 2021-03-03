import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { IconContext } from 'react-icons';
import { GoChevronLeft } from 'react-icons/go';
import UserContext from '../../userContext';
import './add-task.styles.scss';
axios.defaults.withCredentials = true;

class AddTaskPage extends React.Component {
    state = {
        title: '',
        description: '',
        taskState: 'Not Done Yet',
        addTaskAlert: '',
        addButtonLoad: false
    }

    handleAddTask = event => {
        event.preventDefault();
        this.setState( () => ({ addButtonLoad: true }) );
        const title = this.state.title;
        const description = this.state.description;
        const completed = this.state.taskState === 'Not Done Yet'? false : true;

        axios.post('https://ttapi.ahmed-hatem.com/tasks', { title, description, completed })
            .then( res =>  this.props.history.push('/dashboard') )
            .catch( err => {
                if(err.response) {
                    err.response.status === 401? this.context.setLoggedIn(false) 
                        : 
                    this.setState(() => ({ addTaskAlert: err.response.data, addButtonLoad: false }));
                }
                else { 
                    this.setState(() => ({ addTaskAlert: 'Something went wrong, try again', addButtonLoad: false }));
                }
            })
    }

    render() {
        return (
            <div className="container logged-in-container">
                <div className="logged-in-header">
                    <h3>ADD NEW TASK:</h3>
                    <Button onClick={() => this.props.history.goBack()}>
                        <IconContext.Provider value={{ size: "2em" }}>
                            <GoChevronLeft />
                        </IconContext.Provider>
                    </Button>
                </div>

                <Card className="text-white bg-primary add-task-card">
                    <Card.Body>
                        <Form onSubmit={this.handleAddTask}>
                            <Form.Group >
                                <Form.Label><small>TITLE</small></Form.Label>
                                <Form.Control 
                                    required
                                    maxLength="100"
                                    placeholder="New Task Title" 
                                    value={this.state.title}
                                    onChange={e => this.setState(() => ({ title: e.target.value }) )}
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label><small>DESCRIPTION</small></Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={3} 
                                    maxLength="360"
                                    placeholder="New Task Description" 
                                    className="description-text-area"
                                    value={this.state.description}
                                    onChange={e => this.setState(() => ({ description: e.target.value }))}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><small>STATE</small></Form.Label>
                                <Form.Control 
                                    as="select" 
                                    className="mr-sm-2"
                                    value={this.state.taskState}
                                    onChange={e => this.setState(() => ({ taskState: e.target.value}) )}
                                >
                                    <option >Not Done Yet</option>
                                    <option >Completed</option>
                                </Form.Control>
                            </Form.Group>

                            <div>
                                {!!this.state.addTaskAlert &&
                                    <Alert variant="danger" className="text-center">
                                        {this.state.addTaskAlert}
                                    </Alert>
                                }
                                <Button
                                    className="form-submit-button"
                                    variant="secondary"
                                    type="submit"
                                >
                                    {
                                        this.state.addButtonLoad ?
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                        :
                                            'ADD TASK'
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

AddTaskPage.contextType = UserContext;

export default AddTaskPage;
