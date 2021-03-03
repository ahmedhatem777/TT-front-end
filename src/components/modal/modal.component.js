import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Reusable modal component using bootstrap's modal component
const MyModal = props => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body >
                <h4>{props.heading}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>CANCEL</Button>
                <Button variant={props.buttonVariant} onClick={props.onClick}>{props.buttonName}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal;
