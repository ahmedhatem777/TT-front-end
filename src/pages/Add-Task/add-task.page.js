import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './add-task.styles.scss';
axios.defaults.withCredentials = true;

class AddTaskPage extends React.Component {
    state = {
        description: '',
        taskState: 'Not Done Yet'
    }

    handleAddTask = event => {
        const completed = this.state.taskState === 'Not Done Yet'? false : true;
        const description = this.state.description;
        event.preventDefault();
        console.log(this.state, completed)
        axios.post('http://localhost:4000/tasks', { description, completed })
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
                        <Form>
                            <Form.Group >
                                <Form.Label><small>TITLE</small></Form.Label>
                                <Form.Control 
                                    placeholder="New Task Title" 
                                    value={this.state.description}
                                    onChange={ e => this.setState( () => ({ description: e.target.value }) )}
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label><small>DESCRIPTION</small></Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="New Task Description" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><small>STATE</small></Form.Label>
                                <Form.Control 
                                    as="select" 
                                    defaultValue="Not Done Yet"
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
                                    onClick={this.handleAddTask}
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
