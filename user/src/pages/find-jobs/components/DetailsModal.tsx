import React from 'react';
import {Button, Modal} from "react-bootstrap";
import styles from './Details.module.css';
import logo from './../img/logo-fb.jpg'

const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close}>
            <Modal.Header className="mx-auto">
                <div className={`d-flex flex-column align-items-center ${styles.detailsHeader}`}>
                <img src={logo} className={`${styles.logo}`}
                     alt={"Company Logo"}/>
                <h3 className={`mb-1 ${styles.companyName}`}>Facebook</h3>
                    <div className="d-flex justify-content-around gap-2">
                        <span className="h3 fw-bold">Frontend developer</span>
                        <span className="h3 fw-bold text-success">50$ - 75$</span>
                    </div>
                </div>
                <button type="button" className={`btn-close ${styles.xClose}`} onClick={close}
                        aria-label="Close"></button>
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