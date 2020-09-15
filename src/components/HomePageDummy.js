import React, { useState } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, Tooltip } from 'reactstrap';
import { buttonLabel, COVID19ModalHeaderText, COVID19ModalText, COVID19ModalButtonText } from '../constants';

const HomePageDummy = (props) => {
    console.log(props)
    const [modal, setModal] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    

    const toggle = () => {
        setModal(!modal);
    }

    const toolTip = () => {
        setTooltipOpen(!tooltipOpen);
    }

    const data = () => {
        let nonParsedData =  COVID19ModalText ;
        var escapeEl = document.createElement('textarea'); 
        escapeEl.innerHTML = nonParsedData; 
        return { __html:escapeEl.textContent}; 
    }

    return (
        <>
            <div className="container">
                <Button color="danger" onClick={toggle}> {buttonLabel} </Button>
                <Modal isOpen={modal} toggle={toggle} >

                    <ModalHeader toggle={toggle} className="headerClass"> {COVID19ModalHeaderText} </ModalHeader>

                    <ModalBody>
                        <div dangerouslySetInnerHTML={data()} />
                        <Tooltip placement="right" isOpen={tooltipOpen} target="symptoms" toggle={toolTip}>Hello world</Tooltip>
                        <Button color="secondary" onClick={toggle}> {COVID19ModalButtonText} </Button>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default HomePageDummy;