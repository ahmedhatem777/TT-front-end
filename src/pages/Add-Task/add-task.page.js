import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './add-task.styles.scss';
axios.defaults.withCredentials = true;

class AddTaskPage extends React.Component {
    state = {
        title: '',
        description: '',
        taskState: 'Not Done Yet'
    }

    handleAddTask = event => {
        const title = this.state.title;
        const description = this.state.description;
        const completed = this.state.taskState === 'Not Done Yet'? false : true;

        event.preventDefault();
        console.log(this.state, completed)
        axios.post('http://localhost:4000/tasks', { title, description, completed })
        .then(res => { console.log(res); this.props.history.push('/dashboard'); })
        .catch( err => {console.log(err); this.props.history.push('/'); });
    }

    render() {
        return (
            <div className="container logged-in-container">

                <div className="logged-in-header">
                    <h3>ADD NEW TASK:</h3>
                </div>

                <Card className="text-white bg-primary add-task-card">
                    <Card.Body>
                        <Form onSubmit={this.handleAddTask}>
                            <Form.Group >
                                <Form.Label><small>TITLE</small></Form.Label>
                                <Form.Control 
                                    required
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
                                    rows={3} placeholder="New Task Description" 
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
                                <Button
                                    className="form-submit-button"
                                    variant="secondary"
                                    type="submit"
                                >
                                    ADD TASK
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AddTaskPage;
