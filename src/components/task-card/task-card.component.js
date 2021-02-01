import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './task-card.styles.scss';

const TaskCard = () => {
    return (
        <div>
            <Card className="text-white bg-primary mb-3 task-card" >
                <Card.Header className="task-card-header">
                    {/* <div className="row justify task-card-header-row"> */}
                    <h6 className="text-white">TASK TITLE</h6>
                    <Button variant="danger" size="sm">DELETE</Button>
                    {/* </div> */}

                </Card.Header>
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                     </Card.Text>
                    {/* <Badge pill variant="success"><small><b>COMPLETED</b></small></Badge> */}
                    <Badge pill variant="warning"><small><b>INCOMPLETE</b></small></Badge>
                </Card.Body>

                <Card.Footer className="task-card-footer">
                    <p className="text-muted"><b>March 1st, 2020</b></p>
                    <Button variant="info" size="sm">EDIT</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}



export default TaskCard;
