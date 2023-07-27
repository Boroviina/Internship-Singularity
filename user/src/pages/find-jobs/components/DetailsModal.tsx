import React from 'react';
import {Button, Modal} from "react-bootstrap";
import styles from './Details.module.css';
import logo from './../img/logo-fb.jpg'
import {faLocationDot, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DetailsModal = ({showDetails, close}) => {
    return (
        <Modal show={showDetails} onHide={close} size="lg">
            <Modal.Header className="mx-auto">
                <div className={`d-flex flex-column align-items-center ${styles.detailsHeader}`}>
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
                <button type="button" className={`btn-close ${styles.xClose}`} onClick={close}
                        aria-label="Close"></button>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-row gap-4 ms-3">

                <div>
                    <div className="text-nowrap">

                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#8e95a4", height: "1.4rem"}}/>
                    <span className="fw-bold fs-5 ms-2 d-inline-block mb-2">Location:</span>
                    </div>
                    <span className="ms-4 p-1 fw-semibold" style={{borderRadius: "3px", background: "#e3e4ec"
                    , color: "#8e95a4"}}>
                        Los Angeles California - Remote
                    </span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faBriefcase} style={{color: "#8e95a4", height: "1.4rem"}}/>
                    <span className="fw-bold fs-5 ms-2 d-inline-block mb-2">Employment type:</span><br/>
                    <span className="ms-4 p-1 fw-semibold" style={{borderRadius: "3px", background: "#e3e4ec"
                        , color: "#8e95a4"}}>
                        Full time
                    </span>
                </div>
                </div>
                <hr/>
                We offer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aliquam
                asperiores autem beatae consectetur culpa deleniti deserunt doloremque doloribus, excepturi harum
                impedit ipsa iure iusto laborum laudantium libero magni maxime minima nam nisi nulla omnis optio,
                perspiciatis porro quaerat quam quod reiciendis tempore ullam voluptate voluptatum! Aperiam, illo?
                <br/><br/>
                As well as Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti deserunt
                distinctio, doloribus harum pariatur quas recusandae repellendus repudiandae sunt.
                <br/>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, unde!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores beatae error nam quas
                        quod?
                    </li>
                </ul>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque praesentium, quaerat? Amet aperiam delectus eum exercitationem nemo. Dolorem odit, saepe!
                <hr/>
                Specialization: Finance and accounting <br/>
                Experience: Mid level <br/>
                Education: High school <br/>
            </Modal.Body>
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