import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ApplicationPhases} from "../../shared/enums/application-phases";
import {JobApplication} from "../../shared/models/job-application.model";
import {useFormik} from "formik";
import {updateApplication} from "../../shared/services/job-application.service";

type applicationPhaseProperty = {
    application: JobApplication;
}

export const ApplicationPhaseModal: React.FC<applicationPhaseProperty> = (props) => {
    let {applicationPhase} = props.application;
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedPhase, setSelectedPhase] = useState(applicationPhase);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    const updatePhase = (e) => {
        setSelectedPhase(e.target.value);
        console.log("Selected value", selectedPhase);
    }
    const updateApllication = async () => {
        setLoading(true);
        try {
            const updatedApplication = {applicationPhase: selectedPhase};
            console.log("Edited", updatedApplication);
            await updateApplication(props.application.id, updatedApplication);
            setLoading(false);
            handleClose();
        } catch (error) {
            setLoading(false);
            console.error("Error updating application phase:", error);
        }
    }


    return <div className={'m-3 '}>
        <Button variant={'light'} onClick={handleShow}>Update phase</Button>
        <Modal show={show} centered backdrop={'static'} keyboard={false} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose application phase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <select name="appPhase" id="appPhase" className={'form-control form-control-solid'}
                        onChange={updatePhase}
                >
                    <option value="">{ApplicationPhases[applicationPhase]}</option>
                    {Object.entries(ApplicationPhases).map(([key, value]) => (
                        <option value={key} key={key}>{value}</option>
                    ))}
                </select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Close</Button>
                <Button variant='primary' disabled={loading}
                        onClick={updateApllication}>{loading ? 'Updating...' : 'Update changes'}</Button>
            </Modal.Footer>
        </Modal>
    </div>
}