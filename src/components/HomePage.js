import React, { useState } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, Tooltip } from 'reactstrap';
import { buttonLabel, COVID19ModalHeaderText, COVID19ModalText, COVID19ModalButtonText, COVID19ModalToolTips } from '../constants';

const createMarkup = (markup) => {
  let parsedModalData = document.createElement('textarea');
  parsedModalData.innerHTML = markup;
  return { __html: parsedModalData.textContent };
}

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  const tooltipToggle = (e) => {
    if (e === 'contact')
      setTooltipOpen1(!tooltipOpen1);
    else
      setTooltipOpen2(!tooltipOpen2);
  }

  const modalData = () => {
    let rawModalData = COVID19ModalText;
    let parsedModalData = document.createElement('textarea');
    parsedModalData.innerHTML = rawModalData;
    return { __html: parsedModalData.textContent };
  }

  const displayTooltip = () => {
    let tootlTip = COVID19ModalToolTips;
    let parsedTooltip = document.createElement('textarea');
    parsedTooltip.innerHTML = tootlTip;
    let seperatedData = tootlTip.split('~');
    return seperatedData;
  }

  return (
    <>
      <div className="container">
        <Button color="danger" onClick={toggle}> {buttonLabel} </Button>

        <Modal className= "modal-dialog-centered" isOpen={modal} toggle={toggle} >

          <ModalHeader toggle={toggle} className="headerClass"> {COVID19ModalHeaderText} </ModalHeader>

          <ModalBody>

            <div dangerouslySetInnerHTML={modalData()} />

            {displayTooltip().map((markup, i) => {
              return <Tooltip placement="top" isOpen={markup.split("^")[0] === "contact" ?
                tooltipOpen1 : tooltipOpen2} target={markup.split("^")[0]}
                toggle={() => tooltipToggle(markup.split("^")[0])}>
                <div dangerouslySetInnerHTML={createMarkup(markup.split("^")[1])} />
              </Tooltip>
            })}
            <Button outline color="primary" size="md-bold" onClick={toggle} className="buttonStyle offset-3 col-5">
              {COVID19ModalButtonText}
            </Button>
          </ModalBody>
        </Modal>
      </div>
    </>
  )
}

export default HomePage; 
