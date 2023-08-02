import React from 'react';
import {WithChildren} from "../../helpers";
import {Button} from "./form/Button";
import Modal from 'react-bootstrap/Modal';

type CustomModalProps = {
    title: string
    show: boolean
    onHide: () => void
    backdrop?: boolean | "static"
    keyboard?: boolean
}

const CustomInfoModal: React.FC<CustomModalProps & WithChildren> = (props) => {
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
                <Modal.Footer>
                    <Button type="button" disabled={false} onClick={onHide} filled={true}>Continue</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomInfoModal ;