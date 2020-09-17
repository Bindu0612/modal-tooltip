import React, { useState } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, Tooltip } from 'reactstrap';
import { buttonLabel, COVID19ModalHeaderText, COVID19ModalText, COVID19ModalButtonText, COVID19ModalToolTips1, COVID19ModalToolTips2 } from '../constants';

const HomePage = (props) => {
  console.log(props)
  const [modal, setModal] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpen1, setTooltipOpen1] = useState(false);


  const toggle = () => {
    setModal(!modal);
  }

  const toolTip1= (e) => {
    console.log(e.target.id, "tooltip1");
    switch(e.target.id) {
      case 'symptoms':
        setTooltipOpen(!tooltipOpen);
        break;

      case 'contact':
        setTooltipOpen1(!tooltipOpen1);
        break;
    }
  }


  const modalData = () => {
    let rawModalData = COVID19ModalText;
    let parsedModalData = document.createElement('textarea');
    parsedModalData.innerHTML = rawModalData;
    return { __html: parsedModalData.textContent };
  }

  const tooltipData = (e) => {
    console.log("first", e);
    let rawTootltip = COVID19ModalToolTips1;
    let parsedTooltip = document.createElement('textarea');
    parsedTooltip.innerHTML = rawTootltip;
    return { __html: parsedTooltip.textContent };
  }

  const tooltipData2 = () => {
    console.log("second");
    let rawTootltip2 = COVID19ModalToolTips2;
    let parsedTooltip2 = document.createElement('textarea');
    parsedTooltip2.innerHTML = rawTootltip2;
    return { __html: parsedTooltip2.textContent };
  }

  return (
    <>
      <div className="container">
        <Button color="danger" onClick={toggle}> {buttonLabel} </Button>

        <Modal isOpen={modal} toggle={toggle} >

          <ModalHeader toggle={toggle} className="headerClass"> {COVID19ModalHeaderText} </ModalHeader>

          <ModalBody className="mdBody">
            <div dangerouslySetInnerHTML={modalData()} />
            <Tooltip placement="top" isOpen={tooltipOpen}  target="symptoms" toggle={toolTip1} className="tooltipStyle"> <div dangerouslySetInnerHTML={tooltipData()} /> </Tooltip>
            <Tooltip placement="top" isOpen={tooltipOpen1} target="contact" toggle={toolTip1} className="tooltipStyle"> <div dangerouslySetInnerHTML={tooltipData2()} /> </Tooltip>
            <Button outline color="primary" size="md-bold" onClick={toggle} className="buttonStyle"> {COVID19ModalButtonText} </Button>
          </ModalBody>

        </Modal>

      </div>
    </>
  )
}

export default HomePage; 
