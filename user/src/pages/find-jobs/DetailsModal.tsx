import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './components/details-components/Details.module.css';
import JobInfo from "./components/details-components/JobInfo";
import ModalHeader from "./components/details-components/ModalHeader";
import ApplyOrSave from "./components/details-components/ApplyOrSave";
import JobDescriptionContent from "./components/details-components/JobDescriptionContent";


const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close} size="lg">

            <Modal.Header className="mx-auto">
                <ModalHeader />

                <div className={`${styles.positionBtns} d-none d-lg-block`}>
                    <ApplyOrSave />
                </div>

                <button type="button" onClick={close}
                        className={`btn-close ${styles.xClose}`} aria-label="Close">
                </button>
            </Modal.Header>

            <Modal.Body>
                <main className={styles.modalBody}>
                    <section className={styles.jobInformation}>
                        <JobInfo title="Location" mainData="Los Angeles California" secondaryData="Remote"
                                 icon="location-dot"/>
                        <JobInfo title="Employment type" mainData="Full time"
                                 icon="briefcase"/>
                    </section>

                    <section className={styles.qualifications}>
                        <JobInfo title="Area of expertise" mainData="Finance and accounting"
                                 icon="user-tie"/>
                        <JobInfo title="Experience" mainData="Entry level"
                                 icon="glasses"/>
                        <JobInfo title="Education" mainData="Masters"
                                 icon="graduation-cap" />
                    </section>

                    <section className={styles.jobDescription}>
                        <JobDescriptionContent />
                    </section>
                </main>
            </Modal.Body>

            <Modal.Footer className="d-lg-none" style={{position: "sticky", bottom: 0, background: "white"}}>
                    <ApplyOrSave />
            </Modal.Footer>

        </Modal>
    );
};

export default DetailsModal;