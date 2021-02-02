import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmModal = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body >
                <h4>Are you sure you want to save these changes?</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>CANCEL</Button>
                <Button variant="info" onClick={props.onSaveChanges}>SAVE CHANGES</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal;
