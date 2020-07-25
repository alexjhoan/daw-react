import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'

export default function UserData() {
  return (
    <Form id="formUserData">
      <Form.Row>
        <Form.Group as={Col} lg={9}>
          <Form.Row>
            <Form.Group as={Col} lg={6} controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group as={Col} lg={6} controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
            <Form.Group as={Col} lg={8} controlId="formEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>
        </Form.Group>
        <Form.Group as={Col} lg={3}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="file" />
            </Form.Group>
          </Form.Row>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} lg={6} controlId="formEmailConfirm">
          <Form.Label>Confirma el correo</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
         <Form.Group as={Col} lg={6} controlId="formUser">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="@tuUsuario" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress">
        <Form.Label>Ubicacion actual</Form.Label>
        <Form.Control type="text" placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formAboutMe">
        <Form.Label>Sobre mí</Form.Label>
        <Form.Control as="textarea" placeholder="Cuentanos mas sobre ti para que toda la comunidad te conozca." />
        <Form.Text className="text-muted text-right">
          160 caracteres máximo
        </Form.Text>
      </Form.Group>

      <Form.Row className="alignEnd">
        <Form.Group as={Col} lg={6} controlId="formWeb">
          <Form.Label>Sitio web o blog</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu web o blog" />
        </Form.Group>
        <Form.Group as={Col} sm={3} lg={1} controlId="formNumCode">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="+00" />
        </Form.Group>
        <Form.Group as={Col} sm={9} lg={5} controlId="formNumber">
          <Form.Control type="text" placeholder="000-00-00" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} className="btnSubmit">
          <Button className="BtnCancel" variant="primary" type="button">
            Descartar
          </Button>
          <Button variant="primary" type="button">
            Hecho
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  )
}
