import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './components/details-components/Details.module.css';
import JobInfo from "./components/details-components/JobInfo";
import ModalHeader from "./components/details-components/ModalHeader";
import ApplyOrSave from "./components/details-components/ApplyOrSave";
import JobDescriptionContent from "./components/details-components/JobDescriptionContent";
import {JobListing} from "../../shared/models/job-listing.model";

interface DetailsProps {
    job: JobListing;
    showDetails: boolean;

    close(): void;
}

const DetailsModal = ({job, showDetails, close}: DetailsProps) => {
    return (
        <Modal show={showDetails} onHide={close} size="lg">

            <Modal.Header className="mx-auto">
                <ModalHeader companyName={job.employer.companyName} jobTitle={job.jobTitle} salary={job.salary + " €"}/>

                <div className={`${styles.positionBtns} d-none d-lg-block`}>
                    <ApplyOrSave/>
                </div>
                <button type="button" onClick={close}
                        className={`btn-close ${styles.xClose}`} aria-label="Close">
                </button>
            </Modal.Header>

            <Modal.Body>
                <main className={styles.modalBody}>
                    <section className={styles.jobInformation}>
                        <div className="mostImportantInfo">
                            {job.location
                                && <JobInfo title="Location" mainData={job.location} secondaryData={job.remote || ""}
                                            icon="location-dot"/>}
                            {job.employmentType
                                && <JobInfo title="Employment type" mainData={job.employmentType} icon="briefcase"/>}
                            <hr/>
                        </div>
                        {job.appDeadline
                            && <JobInfo title="Application deadline"
                                        mainData={job.appDeadline.toLocaleDateString('en-us', {
                                            month: "long",
                                            day: "numeric"
                                        })}
                                        icon="hourglass-half"/>}
                        {job.cv !== undefined && job.cv
                            && <JobInfo title="CV" mainData={job.cv ? "Required" : "Not required"}
                                        icon="image-portrait"/>}
                        {job.coverLetter !== undefined && job.coverLetter
                            && <JobInfo title="Cover letter" mainData={job.coverLetter ? "Required" : "Not required"}
                                        icon="envelope-open-text"/>}
                        {job.positionsNum // ovo ne radi sa && :'D
                            ? <JobInfo title="Open positions" mainData={job.positionsNum.toString() + " left"}
                                       icon="user-group"/> : null}

                    </section>

                    {job.requirementsModel
                        && <section className={styles.qualifications}>
                            {job.requirementsModel.specialization
                                && <JobInfo title="Area of expertise" mainData={job.requirementsModel.specialization}
                                            icon="user-tie"/>}
                            {job.requirementsModel.experience
                                && <JobInfo title="Experience" mainData={job.requirementsModel.experience} icon="glasses"/>}
                            {job.requirementsModel.education
                                && <JobInfo title="Education" mainData={job.requirementsModel.education} icon="graduation-cap"/>}
                            {job.requirementsModel.skills
                                && <JobInfo title="Skills" mainData={job.requirementsModel.skills} icon="pencil"/>}
                            {job.requirementsModel.drivingLicense
                                && <JobInfo title="Driving license"
                                            mainData={job.requirementsModel.drivingLicense ? "Required" : "Not required"}
                                            icon="car-side"/>}
                            {job.requirementsModel.language
                                && <JobInfo title="Language" mainData={job.requirementsModel.language} icon="earth-americas"/>}
                        </section>}

                    <section className={styles.jobDescription}>
                        {job.description
                            &&  (<JobDescriptionContent description={job.description}/>)}
                        {job.appInstructions
                            && <div>
                                <hr/>
                                <h4>Application instructions:</h4>
                                {job.appInstructions}
                            </div>}
                    </section>
                </main>
            </Modal.Body>

            <Modal.Footer className="d-lg-none card-bg position-sticky">
                <ApplyOrSave/>
            </Modal.Footer>

        </Modal>
    );
};

export default DetailsModal;