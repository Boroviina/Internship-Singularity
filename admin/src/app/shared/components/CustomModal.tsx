import React from 'react';
import {WithChildren} from "../../../_metronic/helpers";
import Modal from 'react-bootstrap/Modal';

type CustomModalProps = {
    title: string
    show: boolean
    onHide: () => void
    backdrop?: boolean | "static"
    keyboard?: boolean
    buttonFooter?: boolean
    buttonFooterText?: string
    onClickButtonFooter?: () => void
}

const CustomModal: React.FC<CustomModalProps & WithChildren> = (props) => {
    const {
        title,
        show,
        onHide,
        backdrop = "static",
        keyboard = false,
        buttonFooter,
        buttonFooterText,
        onClickButtonFooter,
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
                {buttonFooter && <Modal.Footer>
                    <button onClick={onClickButtonFooter}>{buttonFooterText}</button>
                </Modal.Footer>}
            </Modal>
        </>
    );
}

export default CustomModal ;