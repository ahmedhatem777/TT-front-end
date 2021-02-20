import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import TaskCard from '../../components/task-card/task-card.component';
import Modal from '../../components/modal/modal.component';
import axios from 'axios';
import './dashboard.styles.scss';
axios.defaults.withCredentials = true;

class Dashboard extends React.Component {
    state = {
        modalShow: false,
        tasks: [],
        taskToDelete: undefined
    }

    handleOpenModal = taskID => {
        this.setState(() => ({ taskToDelete: taskID}));
        this.setState(() => ({ modalShow: true }));
    }

    handleHideModal = () => {
        this.setState(() => ({ modalShow: false }));
    }

    handleDeleteTask = () => {
        axios.delete(`http://localhost:4000/tasks/${this.state.taskToDelete}`)
        .then( res => {
            console.log(res);
            this.setState( (prevState) => 
                ({tasks: prevState.tasks.filter( task => task._id !== this.state.taskToDelete)})
            )
            this.setState( () => ({tasksToDelete: undefined}));
        })
        .catch( err => console.log(err));
        this.handleHideModal();
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.handleOpenModal();
    }
    
    componentDidMount = () => {
        axios.get('http://localhost:4000/tasks')
        .then( res => this.setState({ tasks: res.data}) )
        .catch( err =>  console.log(err) );
    }

    render() {
        return (
            <div className="container logged-in-container">
                <div className="logged-in-header">
                    <h3>TASKS:</h3>
                    
                    <DropdownButton id="dropdown-basic-button" title="SORT BY">
                        <Dropdown.Item onSelect={() => { console.log("Creation Date (Ascending)") }} >Creation Date (Ascending)</Dropdown.Item>
                        <Dropdown.Item onSelect={() => { console.log("Creation Date (Descending)") }} >Creation Date (Descending)</Dropdown.Item>
                        <Dropdown.Item onSelect={() => { console.log("SHOW ALL") }} >All</Dropdown.Item>
                        <Dropdown.Item onSelect={() => { console.log("SHOW COMPLETED") }} >Completed Only</Dropdown.Item>
                        <Dropdown.Item onSelect={() => { console.log("SHOW INCOMPLETE") }} >Incompleted Only</Dropdown.Item>
                    </DropdownButton>
                </div>

                {
                this.state.tasks.length >= 0 &&
                    this.state.tasks.map(
                        task => <TaskCard 
                                    onClickEdit={(id) => this.props.history.push(`/edittask/${id}`)}
                                    onClickDelete={this.handleOpenModal}
                                    taskTitle={task.title}
                                    taskDescription={task.description}
                                    taskDate={task.createdAt}
                                    completed={task.completed}    
                                    key={task._id}      
                                    id={task._id}          
                                />)
                
                }
                
                <div className="notasks-and-button-div">
                    {this.state.tasks.length === 0 
                        && 
                    <h5 className="no-tasks-heading">You seem to have no tasks at the moment.</h5>}

                    <Button
                        className="add-task-button"
                        size="sm"
                        onClick={() => this.props.history.push(`/addtask`)}
                    >
                        ADD NEW TASK
                </Button>
                </div>

                <Modal
                    show={this.state.modalShow}
                    onHide={this.handleHideModal}
                    onClick={this.handleDeleteTask}
                    heading={"Are you sure you want to delete this task?"}
                    buttonVariant={"danger"}
                    buttonName={"DELETE TASK"}
                />

            </div>
        )
    }
}

export default Dashboard;