import React from 'react';
import {WithChildren} from "../../../_metronic/helpers";
import Modal from 'react-bootstrap/Modal';

type CustomModalProps = {
    title: string
    show: boolean
    onHide: () => void
    backdrop?: boolean | "static"
    keyboard?: boolean
}

const CustomModal: React.FC<CustomModalProps & WithChildren> = (props) => {
    const {
        title,
        show,
        onHide,
        backdrop = "static",
        keyboard = false,
        children,
    } = props

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop={backdrop}
                keyboard={keyboard}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <button onClick={onHide}>Continue</button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
}

export default CustomModal ;