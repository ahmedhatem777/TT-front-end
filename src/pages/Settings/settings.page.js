import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import LogOutPage from '../Log-Out/log-out.page';
import EditProfilePage from '../Edit-Profile/edit-profile.page';
import DeleteAccountPage from '../Delete-Account/delete-account.page';
import NotFoundPage from '../Not-Found/not-found.page';
import './settings.styles.scss';

class SettingsPage extends React.Component {
    state = {
        modalShow: false
    }

    handleOpenModal = () => {
        this.setState(() => ({ modalShow: true }));
    }

    handleHideModal = () => {
        this.setState(() => ({ modalShow: false }));
    }

    handleLogOut = () => {
        axios.post('http://localhost:4000/users/logout')
        .then( res => console.log(res) )
        .catch( err => console.log(err) );

        this.props.history.push('/');
    }

    handleLogOutAll = () => {
        axios.post('http://localhost:4000/users/logoutAll')
        .then(res => console.log(res) )
        .catch(err => console.log(err) );
        this.props.history.push('/');
    }

    handleSaveChanges = (name, email, age, password) => {
        const info = password !== ''? { name, email, age, password}: {name, email, age}
        axios.patch('http://localhost:4000/users/me', info)
        .then( res => console.log(res))
        .catch( err => console.log(err));
        this.props.history.push('/showprofile');
    }

    handleDeleteAccount = () => {
        axios.delete('http://localhost:4000/users/me')
        .then( res => console.log(res) )
        .catch( err => console.log(err) );

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container logged-in-container">
                <div className="logged-in-header">
                    <DropdownButton id="dropdown-basic-button" title="SETTINGS" className="my-dropdown-button">

                        <Dropdown.Item eventKey="1" onSelect={() => this.props.history.push('/settings')}>LOG OUT</Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item eventKey="2" onSelect={() => this.props.history.push('/settings/editprofile')}>EDIT PROFILE</Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item eventKey="3" onSelect={() => this.props.history.push('/settings/deleteaccount')}>DELETE ACCOUNT</Dropdown.Item>

                    </DropdownButton>
                </div>

                <div className="row first-row">
                    <div className="col-12">
                        <Switch>
                            <Route 
                                exact path={`${this.props.match.path}`} 
                                render={ 
                                    () => 
                                        <LogOutPage
                                            modalShow={this.state.modalShow}
                                            onHide={this.handleHideModal}
                                            onClick={this.handleOpenModal}
                                            logOut={this.handleLogOut} 
                                            logOutAll={this.handleLogOutAll}
                                        />
                                } 
                            />

                            <Route 
                                exact path={`${this.props.match.path}/editprofile`}
                                render={
                                    () =>
                                        <EditProfilePage
                                            modalShow={this.state.modalShow}
                                            onHide={this.handleHideModal}
                                            onClick={this.handleOpenModal}
                                            handleSaveChanges={this.handleSaveChanges}
                                        />
                                }
                            />

                            <Route 
                                exact path={`${this.props.match.path}/deleteaccount`}
                                render={
                                    () =>
                                        <DeleteAccountPage
                                            modalShow={this.state.modalShow}
                                            onHide={this.handleHideModal}
                                            onClick={this.handleOpenModal}
                                            deleteAccount={this.handleDeleteAccount}
                                        />
                                }
                            />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingsPage;
