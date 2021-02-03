import React from 'react';
import ConfirmModal from '../../components/confirm-modal/confirm-modal.component';
import EditProfileForm from '../../components/edit-profile-form/edit-profile-form.component';
import './edit-profile.styles.scss';

class EditProfilePage extends React.Component {
    state = {
        modalShow: false
    }

    handleOpenModal = () => {
        this.setState( () => ({ modalShow: true }) );
    }
    handleHideModal = () => {
        this.setState( () => ({ modalShow: false }) );
    }

    handleSaveChanges = () => {
       this.props.history.push('/showprofile');
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.handleOpenModal();
    }

    render() {
        return (
            <div className="container logged-in-container">
                <div className="logged-in-header">
                    <h3>Edit PROFILE:</h3>
                </div>

                <EditProfileForm
                    onSubmit={this.handleOnSubmit}
                />

                <ConfirmModal
                    show={this.state.modalShow}
                    onHide={this.handleHideModal}
                    onSaveChanges={this.handleSaveChanges}
                />
            </div>
        )
    }
}

export default EditProfilePage;
