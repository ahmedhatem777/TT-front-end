import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../../components/modal/modal.component';
import './log-out.styles.scss';

const LogOutPage = (props) => {
    return (
        <div className="row justify-content-around">
            <div className="col-12 col-md-6 col-lg-6">
                <Button 
                    size="lg" 
                    variant="warning" 
                    className="btn-block log-out-button"
                    onClick={props.onClick}
                >
                    LOG OUT
                </Button>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <Button 
                    size="lg" 
                    variant="warning" 
                    className="btn-block log-out-all-button"
                    onClick={props.onClick}

                >
                    LOG OUT OF ALL DEVICES</Button>
            </div>

            <Modal
                show={props.modalShow}
                onHide={props.onHide}
                onClick={props.logOut}
                heading={"Are you sure you want to Log out?"}
                buttonVariant={"warning"}
                buttonName={"LOG OUT"}
            />

        </div> 
    )
}

export default LogOutPage;
