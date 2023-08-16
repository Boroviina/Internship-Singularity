import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {getJobs, removeJob} from '../../shared/services/job.service';

interface ModelDeleteItemProps {
    jobId: string,
    update: () => {}
}

export const DeleteJobModal: React.FC<ModelDeleteItemProps> =(props) =>{

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        console.log("ID: ", props.jobId);
    }


    const deleteJob = async () => {
        try {
            setLoading(true);
            console.log("ID: ", props.jobId);
            await removeJob(props.jobId);
            props.update();
            handleClose();
            setLoading(false);
        } catch (error) {
            console.log("Error deleting job: ", error);
            setLoading(false);
        }
    }


    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                Delete job
            </Button>
            <div>
                <Modal show={show} centered backdrop={'static'} keyboard={false} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>Are you sure you want to temporarily delete this job?</p></Modal.Body>
                    <Modal.Footer>
                        <Button variant={'secondary'} onClick={handleClose}>Cancel</Button>
                        <Button variant={'primary'} onClick={deleteJob}>Delete job</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}