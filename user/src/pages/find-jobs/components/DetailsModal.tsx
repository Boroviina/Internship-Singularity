import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './Details.module.css';
import JobInfo from "./details-components/JobInfo";
import ModalHeader from "./details-components/ModalHeader";
import ApplyOrSave from "./details-components/ApplyOrSave";


const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close} size="lg">
            <Modal.Header className="mx-auto">
                <ModalHeader />
                <div className={`${styles.positionBtns} d-lg-block d-none`}>
                    <ApplyOrSave />
                </div>
                <button type="button" className={`btn-close ${styles.xClose}`} onClick={close}
                        aria-label="Close"></button>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.modalBody}>

                    <div className={styles.jobInformation}>
                        <JobInfo icon="location-dot" title="Location"
                                 mainData="Los Angeles California" secondaryData="Remote"/>
                        <JobInfo icon="briefcase" title="Employment type"
                                 mainData="Full time"/>

                    </div>
                    <div className={styles.qualifications}>
                        <JobInfo icon="user-tie" title="Area of expertise" mainData="Finance and accounting"/>
                        <JobInfo icon="glasses" title="Experience" mainData="Entry level"/>
                        <JobInfo icon="graduation-cap" title="Education" mainData="Masters"/>
                    </div>
                    <div className={styles.jobDescription}>

                        <hr/>
                        <div className="fw-bold">Job description:</div>
                        We offer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci
                        aliquam
                        asperiores autem beatae consectetur culpa deleniti deserunt doloremque doloribus, excepturi
                        harum
                        impedit ipsa iure iusto laborum laudantium libero magni maxime minima nam nisi nulla omnis
                        optio,
                        perspiciatis porro quaerat quam quod reiciendis tempore ullam voluptate voluptatum! Aperiam,
                        illo?
                        <br/><br/>
                        As well as Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti deserunt
                        distinctio, doloribus harum pariatur quas recusandae repellendus repudiandae sunt.
                        <br/>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, unde!</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem!</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores beatae error nam
                                quas
                                quod?
                            </li>
                        </ul>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque praesentium, quaerat? Amet
                        aperiam
                        delectus eum exercitationem nemo. Dolorem odit, saepe!
                        <hr/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-lg-none" style={{position: "sticky", bottom: 0, background: "white"}}>
                    <ApplyOrSave />
            </Modal.Footer>
        </Modal>
    );
};

export default DetailsModal;