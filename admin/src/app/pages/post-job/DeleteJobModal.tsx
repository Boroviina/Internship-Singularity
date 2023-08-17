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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-trash" viewBox="0 0 16 16">
                    <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
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