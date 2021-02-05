import React from 'react';
import Modal from '../../components/modal/modal.component';
import EditProfileForm from '../../components/edit-profile-form/edit-profile-form.component';
import './edit-profile.styles.scss';

class EditProfilePage extends React.Component {
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.onClick();
    }

    render() {
        return (
            <div className="container edit-profile-container">
                <EditProfileForm
                    onSubmit={this.handleOnSubmit}
                />

                <Modal
                    show={this.props.modalShow}
                    onHide={this.props.onHide}
                    onClick={this.props.handleSaveChanges}
                    heading={"Are you sure you want to submit these changes?"}
                    buttonVariant={"info"}
                    buttonName={"SUBMIT"}
                />
            </div>
        )
    }
}

export default EditProfilePage;
