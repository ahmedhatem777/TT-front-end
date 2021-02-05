import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import TaskCard from '../../components/task-card/task-card.component';
import Modal from '../../components/modal/modal.component';
import './dashboard.styles.scss';

class Dashboard extends React.Component {
    state = {
        modalShow: false
    }

    handleOpenModal = () => {
        this.setState(() => ({ modalShow: true }));
    }
    handleHideModal = () => {
        this.setState(() => ({ modalShow: false }));
    }

    handleDeleteTask = () => {
        this.props.history.push('/dashboard');
        this.handleHideModal();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.handleOpenModal();
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

                <TaskCard 
                    onClickEdit={() => this.props.history.push('/edittask')}
                    onClickDelete={this.handleOpenModal}
                />
                <div className="notasks-and-button-div">
                    {/* <h5 className="no-tasks-heading">You seem to have no tasks at the moment.</h5> */}
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