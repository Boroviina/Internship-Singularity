import React from 'react';
import {Button, Modal} from "react-bootstrap";
import styles from './Details.module.css';
import logo from './../img/logo-fb.jpg'
import generalBtn from "../../Home/GeneralButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp, library} from '@fortawesome/fontawesome-svg-core';
import {faLocationDot, faBriefcase, faUserTie, faGlasses, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot, faBriefcase, faUserTie, faGlasses, faGraduationCap);

interface JobInfoProps {
    icon: IconProp; // the fontawesome icon you want, e.g. "coffee", "location-dot"
    title: string;
    mainData: string;
    secondaryData?: string;
}

const JobInfo = ({icon, title, mainData, secondaryData}: JobInfoProps) => {
    return (
        <div className="d-flex align-items-baseline gap-2 p-1" style={{minHeight: "4rem"}}>
            <FontAwesomeIcon icon={icon} size="lg" style={{color: "#7f8593"}}/>
            <div>
                <div className="fw-bold fs-5 mb-1">{title}:</div>
                <span className="p-1 fw-semibold" style={{
                    borderRadius: "3px", background: "#e5e6ee"
                    ,color: "#7f8593"
                }}>
                    {mainData + (secondaryData ? " - " + secondaryData : "")}
                </span>
            </div>
        </div>
    );
};

const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close} size="lg">
            <Modal.Header className="mx-auto">
                <div className={`d-flex flex-column align-items-center`}>
                    <img src={logo} className={`${styles.logo}`}
                         alt={"Company Logo"}/>
                    <h3 className={`mb-1 ${styles.companyName}`}>Facebook</h3>
                    <div className={`d-flex flex-column flex-lg-row justify-content-between
                        align-items-center text-center`}>
                        <div className="fs-3 fw-bold">Senior developer</div>
                        <div className={`mx-2 fs-3 fw-bold d-none d-lg-block`}>-</div>
                        <div className="fs-3 fw-bold text-nowrap flex-wrap text-success">50$ - 75$</div>
                    </div>
                </div>
                <div className={`${styles.positionBtns} d-lg-block d-none`}>
                    <button type="button"
                            className={`${generalBtn.filledButton} ${generalBtn.smallBtn}`}>
                        Apply
                    </button>
                    <button type="button"
                            className={`${generalBtn.lightButton} ${generalBtn.smallBtn}`}>
                        Save
                    </button>
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
            <Modal.Footer className="d-lg-none"
                          style={{position: "sticky", bottom: 0, background: "white"}}>
                <div>
                    <button type="button"
                            className={`${generalBtn.filledButton} ${generalBtn.smallBtn}`}>
                        Apply
                    </button>
                    <button type="button"
                            className={`${generalBtn.lightButton} ${generalBtn.smallBtn}`}>
                        Save
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailsModal;