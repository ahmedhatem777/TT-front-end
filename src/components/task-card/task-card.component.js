import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { IconContext } from 'react-icons';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import './task-card.styles.scss';

// Task card used in the dashboard page
const TaskCard = (props) => {
    return (
        <div>
            <Card className="text-white bg-primary mb-3 task-card" >
                <Card.Header className="task-card-header">
                    <h6 className="text-white">{props.taskTitle}</h6>
                    <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => props.onClickDelete(props.id)}
                    >
                        <IconContext.Provider value={{size: "2em" }}>
                            <AiOutlineDelete />
                        </IconContext.Provider>
                        
                    </Button>
                    {/* </div> */}

                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.taskDescription}
                    </Card.Text>

                    {props.completed ?
                        <Badge pill variant="success"><small><b>COMPLETED</b></small></Badge>
                    :
                        <Badge pill variant="warning"><small><b>INCOMPLETE</b></small></Badge>
                    }
            
                </Card.Body>

                <Card.Footer className="task-card-footer">
                    <p className="text-muted"><b>{new Date(props.taskDate).toDateString()}</b></p>
                    <Button variant="info" size="sm" onClick={() => props.onClickEdit(props.id)}>
                        <IconContext.Provider value={{ size: "2em" }}>
                            <AiOutlineEdit />
                        </IconContext.Provider>
                        </Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default TaskCard;
