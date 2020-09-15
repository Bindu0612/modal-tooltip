import React, { useState} from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {buttonLabel, COVID19ModalHeaderText, COVID19ModalText, COVID19ModalButtonText} from '../constants';

const HomePage = (props)=>{
   console.log(props)
    const [modal, setModal] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () =>{
    setModal(!modal);
   }

   const toolTip = () => {
    setTooltipOpen(!tooltipOpen);
   }
 const data = () => {
    let nonParsedData = {__html: COVID19ModalText};
    return nonParsedData;
  }
        return(
            <>
                <div className = "container">
                <Button color="danger" onClick={toggle}> {buttonLabel} </Button>
                <Modal isOpen = {modal} toggle = {toggle} >
                    
                    <ModalHeader toggle = {toggle} className= "headerClass"> {COVID19ModalHeaderText} </ModalHeader>
                    
                    <ModalBody>
                        
                        <div dangerouslySetInnerHTML={data()}/>
                          </ModalBody>
                    
                    <ModalFooter>
                        {COVID19ModalButtonText}
                    </ModalFooter>
                </Modal>
                </div>
            </>
        )
}

export default HomePage;