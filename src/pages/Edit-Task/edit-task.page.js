import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IconContext } from 'react-icons';
import { GoChevronLeft } from "react-icons/go";
import axios from 'axios';
import './edit-task.styles.scss';
axios.defaults.withCredentials = true;

class EditTaskPage extends React.Component {
    state = {
        title: '',
        description: '',
        completed: undefined
    }

    componentDidMount = () => {
        axios.get(`http://localhost:4000/tasks/${this.props.match.params.id}`)
        .then( ({data}) => {
            this.setState( () => ({
                title: data.title,
                description: data.description,
                completed: data.completed
            }))
        })
        .catch( err => console.log(err) )
    }

    handleSubmitEdit = () => {
        const title = this.state.title;
        const description = this.state.description;
        const completed = this.state.completed;

        axios.patch(`http://localhost:4000/tasks/${this.props.match.params.id}`, 
        {title, description, completed})
            .then( res => this.props.history.push('/dashboard'))
            .catch(err => console.log(err));
    }

    render() {
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
                                    value={this.state.title}
                                    onChange={ e => this.setState( () => ({title: e.target.value})) }
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label><small>DESCRIPTION</small></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={this.state.description}
                                    onChange={e => this.setState(() => ({ description: e.target.value }))}

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
                                            ))}
                                    }
                                    >
                                    <option>Completed</option>
                                    <option>Not Done Yet</option>
                                </Form.Control>
                            </Form.Group>

                            <div>
                                <Button
                                    className="form-submit-button"
                                    variant="info"
                                    type="submit"
                                >EDIT TASK</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EditTaskPage;
