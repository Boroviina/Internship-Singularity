import React from 'react';
import {Button, Modal} from "react-bootstrap";
import styles from "./JobListing.module.css";
import logo from "./../img/logo-fb.jpg"

const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close} >
            <Modal.Header className="mx-auto">
                <div className="d-flex flex-column align-items-center" style={{position: "relative", bottom: "1.5rem"}}>
                <img src={logo} className={`${styles.logo}`}
                     style={{height: "5rem", width: "5rem", border: "1px solid #c8d",
                         borderRadius: "5px", background: "white"}}
                     alt={"Company Logo"}/>
                <h3 className="mb-1" style={{letterSpacing: "3px"}}>Facebook</h3>
                    <div className="d-flex justify-content-around gap-2">
                        <span className="h3 fw-bold">Frontend developer</span>
                        <span className="h3 fw-bold text-success">50$ - 75$</span>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={close}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailsModal;