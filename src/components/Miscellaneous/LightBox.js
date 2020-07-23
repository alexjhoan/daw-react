import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import '../Styles/LightBox.css'

export function LightBox(props:any){
  return(
    <Modal
      {...props}
      size={props.modalSize || "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
    >
      <Button variant="light" className="closeLightBox" onClick={props.onHide}>x</Button>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  )
}
