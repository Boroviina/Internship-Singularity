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
    const requirements = job.requirementsModel;
    return (
        <Modal show={showDetails} onHide={close} size="lg">

            <Modal.Header className="mx-auto">
                <ModalHeader companyName={job.companyName} jobTitle={job.jobTitle} pay={job.pay} />

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
                        {job.location
                            && <JobInfo title="Location" mainData={job.location} secondaryData={job.remote || ""} icon="location-dot"/>}
                        {job.employmentType
                            && <JobInfo title="Employment type" mainData={job.employmentType} icon="briefcase"/>}
                        <hr/>
                        <div style={{position: "relative", bottom: 0}}>
                            {job.appDeadline
                                && <div className="text-muted">
                                    {"Application deadline: "
                                        + job.appDeadline.toLocaleDateString('en-us', {month: "long", day: "numeric"})}
                                </div>}
                            {job.cv !== undefined && job.cv
                                && <div className="text-muted">{"CV: " + (job.cv ? "Required" : "Not required")}</div>}
                            {job.coverLetter !== undefined && job.coverLetter
                                && <div className="text-muted">{"Cover letter: " + (job.coverLetter ? "Required" : "Not required")}</div>}
                            {job.positionsNum
                                && <div className="text-muted">{"Positions left: " + job.positionsNum}</div>}
                        </div>



                    </section>

                    <section className={styles.qualifications}>
                        {requirements.specialization
                            && <JobInfo title="Area of expertise" mainData={requirements.specialization} icon="user-tie"/>}
                        {requirements.experience
                            && <JobInfo title="Experience" mainData={requirements.experience} icon="glasses"/>}
                        {requirements.education
                            && <JobInfo title="Education" mainData={requirements.education} icon="graduation-cap" />}
                        {requirements.skills
                            && <JobInfo title="Skills" mainData={requirements.skills} icon="pencil" />}
                        {requirements.driverLicence
                            && <JobInfo title="Driving license" mainData={requirements.driverLicence ? "Required" : "Not required"} icon="car-side" />}
                        {requirements.language
                            && <JobInfo title="Language" mainData={requirements.language} icon="earth-americas" />}
                    </section>

                    <section className={styles.jobDescription}>
                        {job.description
                            && <JobDescriptionContent description={job.description}/>}
                        {job.appInstructions
                            && <div>
                                <h4>Application instructions:</h4>
                                {job.appInstructions}
                            </div>}
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