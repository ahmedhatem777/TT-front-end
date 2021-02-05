import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../../components/modal/modal.component';
import './delete-account.styles.scss';

const DeleteAccountPage = (props) => {
    return (
        <div className="row justify-content-around">
            <div className="col-12">
                <Button 
                    size="lg" 
                    variant="danger" 
                    className="btn-block delete-account-button"
                    onClick={props.onClick}
                >
                    DELETE THIS ACCOUNT!
                </Button>
            </div>

            <Modal
                show={props.modalShow}
                onHide={props.onHide}
                onClick={props.deleteAccount}
                heading={"Are you sure you want to delete this account?"}
                buttonVariant={"danger"}
                buttonName={"DELETE"}
            />
        </div>
    )
}

export default DeleteAccountPage;
