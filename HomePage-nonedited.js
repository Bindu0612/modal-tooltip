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

    // const tooltipData = (e) => {
  //   console.log("first", e);
  //   let rawTootltip = COVID19ModalToolTips1;
  //   let parsedTooltip = document.createElement('textarea');
  //   parsedTooltip.innerHTML = rawTootltip;
  //   return { __html: parsedTooltip.textContent };
  // }
  
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
                        
                        {/* <Tooltip placement="top" isOpen={tooltipOpen}  target="symptoms" toggle={toolTip1} className="tooltipStyle"> <div dangerouslySetInnerHTML={tooltipData()} /> </Tooltip> */}
            {/* <Tooltip placement="top" isOpen={tooltipOpen1} target="contact" toggle={toolTip1} className="tooltipStyle">
               <div dangerouslySetInnerHTML={tooltipData2()} /> 
            </Tooltip> */}

                        {/* <Tooltip placement="top" isOpen={tooltipOpen1} target="contact" toggle={toolTip1} className="tooltipStyle">
              <div dangerouslySetInnerHTML={tooltipData2()} />
            </Tooltip> */}
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