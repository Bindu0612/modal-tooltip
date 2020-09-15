import React, { useState } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, Tooltip } from 'reactstrap';
import { buttonLabel, COVID19ModalHeaderText, COVID19ModalText, COVID19ModalButtonText, COVID19ModalToolTips1, COVID19ModalToolTips2 } from '../constants';

const HomePage = (props) => {
  console.log(props)
  const [modal, setModal] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);


  const toggle = () => {
    setModal(!modal);
  }

  const toolTip = () => {
    setTooltipOpen(!tooltipOpen);
  }

  const modalData = () => {
    let rawModalData = COVID19ModalText;
    let parsedModalData = document.createElement('textarea');
    parsedModalData.innerHTML = rawModalData;
    return { __html: parsedModalData.textContent };
  }

  const tooltipData = () => {
    let rawTootltip = COVID19ModalToolTips1;
    let parsedTooltip = document.createElement('textarea');
    parsedTooltip.innerHTML = rawTootltip;
    return { __html: parsedTooltip.textContent };
  }

  return (
    <>
      <div className="container">
        <Button color="danger" onClick={toggle} className="homeButton"> {buttonLabel} </Button>

        <Modal isOpen={modal} toggle={toggle} >

          <ModalHeader toggle={toggle} className="headerClass"> {COVID19ModalHeaderText} </ModalHeader>

          <ModalBody>
            <div dangerouslySetInnerHTML={modalData()} />
            <Tooltip placement="right" isOpen={tooltipOpen} target="symptoms" toggle={toolTip} className="tooltipStyle"> <div dangerouslySetInnerHTML={tooltipData()} /> </Tooltip>
            <Button outline color="primary" size="md-bold" onClick={toggle} className="buttonStyle"> {COVID19ModalButtonText} </Button>
          </ModalBody>

        </Modal>

      </div>
    </>
  )
}

export default HomePage;