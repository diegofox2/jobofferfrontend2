import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Login, { LoginCredentials } from './Login'

export interface LoginModalProps {
    onLogin?: (credentials: LoginCredentials) => void,
    onClose?: () => void,
    show: boolean
}


export default function LoginModal(props: LoginModalProps) {

    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        setShowModal(props.show);
    }, [props.show])

    const hideModal = () => {
        setShowModal(false);
        props.onClose && props.onClose();
    }

    return (
        <>
            <Modal centered {...props} show={showModal} onHide={hideModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Ingreso al sistema</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login />
                </Modal.Body>
            </Modal>
        </>
    );
}