import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './add-task.styles.scss';

const AddTaskPage = (props) => {
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
                            <Form.Control placeholder="New Task Title" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label><small>DESCRIPTION</small></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="New Task Description" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><small>STATE</small></Form.Label>
                            <Form.Control as="select" defaultValue="Not Done Yet" className="mr-sm-2">
                                <option>Completed</option>
                                <option>Not Done Yet</option>
                            </Form.Control>
                        </Form.Group>

                        <div>
                            <Button
                                className="form-submit-button"
                                variant="secondary"
                                type="submit"
                                onClick={(e) => { e.preventDefault(); props.history.push('/dashboard') }}

                            >ADD TASK</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default AddTaskPage;
