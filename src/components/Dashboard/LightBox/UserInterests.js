import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function UserInterests() {
  return (
    <div id="UserConfiguration" className="mt-4">
      <div className="firstRow">
        <p className="h4">¿Quieres darte de alta en nuestra comunidad como EXPERTO o ASOCIACIÓN?</p>
        <p>Puedes dejarnos un mensaje por este medio explicándonos un poco sobre tu experiencia y los temas dominas. También puedes escribir directamente a nuestro correo electrónico <a href="mailto:soporte@dreamaway.travel" target="_blank" className="text-reset textYellow">soporte@dreamaway.travel</a>, agrega datos de contacto y documentos que consideres relevantes para evaluar tu petición.</p>
        <Form className="mt-4">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" />
          </Form.Group>
          <Button
            type="submit"
            className="DawBtn"
            >
            Enviar
          </Button>
        </Form>
      </div>
      <div className="SaveButtons d-flex align-items-center justify-content-center flex-md-row-reverse justify-content-md-start">
        <Button
          type="submit"
          id="postProfile"
          className="DawBtn"
          >
          Hecho
        </Button>
        <Button type="button" className="BtnCancel">
          Descartar
        </Button>
      </div>
    </div>
  )
}
