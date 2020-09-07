import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function UserHelp() {
  return (
    <Form id="UserConfiguration" className="mt-4">
      <div className="firstRow">
        <p className="h4 mt-3">¿Tienes dudas sobre alguna sección de Dreamaway?</p>
        <p>Tenemos una sección de preguntas frecuentes que quizás puedan resolver tus dudas en cuanto al funcionamiento de nuestra página y los servicios que presta.</p>
        <a href="/#" className="text-reset textYellow">Preguntas Frecuentes</a>
        <p className="h4 mt-3">¿Tienes dudas sobre el manejo de tu información en Dreamaway?</p>
        <p>Puedes leer nuestras políticas de uso de datos y privacidad para resolver tus dudas.</p>
        <a href="/#" className="text-reset textYellow">Políticas de uso de datos y privacidad</a>
        <p className="h4 mt-3">¿Necesitas ayuda para resolver algún error dentro de Dreamaway?</p>
        <p>Puedes ponerte en contacto con nosotros llenando el siguiente recuadro o escribiendo directamente a nuestro correo electrónico <a href="mailto:soporte@dreamaway.travel" className="text-reset textYellow">soporte@dreamaway.travel</a></p>
        <Form.Group controlId="UserHelp">
          <Form.Control as="textarea" />
        </Form.Group>
      </div>
      <div className="SaveButtons d-flex align-items-center justify-content-center flex-md-row-reverse justify-content-md-start">
        <Button
          type="submit"
          id="postProfile"
          className="DawBtn"
          >
          Enviar
        </Button>
        <Button type="button" className="BtnCancel">
          Descartar
        </Button>
      </div>
    </Form>
  )
}
