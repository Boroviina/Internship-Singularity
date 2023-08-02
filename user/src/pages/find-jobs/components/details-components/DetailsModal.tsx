import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './Details.module.css';
import JobInfo from "./JobInfo";
import ModalHeader from "./ModalHeader";
import ApplyOrSave from "./ApplyOrSave";
import JobDescriptionContent from "./JobDescriptionContent";


const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close} size="lg" className={''} >

            <Modal.Header className="mx-auto">
                <ModalHeader />

                <div className={`${styles.positionBtns} position-absolute d-none d-lg-block`}>
                    <ApplyOrSave />
                </div>

                <button type="button" onClick={close}
                        className={`btn-close ${styles.xClose} position-absolute`} aria-label="Close">
                </button>
            </Modal.Header>

            <Modal.Body>
                <main className={`mx-1 justify-content-center d-grid`}>
                    <section className={`mt-0 mx-auto ${styles.jobInformation}`}>
                        <JobInfo title="Location" mainData="Los Angeles California" secondaryData="Remote"
                                 icon="location-dot"/>
                        <JobInfo title="Employment type" mainData="Full time"
                                 icon="briefcase"/>
                    </section>

                    <section className={` ${styles.qualifications} m-auto`}>
                        <JobInfo title="Area of expertise" mainData="Finance and accounting"
                                 icon="user-tie"/>
                        <JobInfo title="Experience" mainData="Entry level"
                                 icon="glasses"/>
                        <JobInfo title="Education" mainData="Masters"
                                 icon="graduation-cap" />
                    </section>

                    <section className={`text-align-justify ${styles.jobDescription}`}>
                        <JobDescriptionContent />
                    </section>
                </main>
            </Modal.Body>

            <Modal.Footer className="d-lg-none position-sticky" >
                    <ApplyOrSave />
            </Modal.Footer>

        </Modal>
    );
};

export default DetailsModal;