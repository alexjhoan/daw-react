import React from 'react'
import {Button} from 'react-bootstrap'
import '../Styles/Dashboard/UserMessage.css'

import { useDispatch } from 'react-redux';
import { showDialogEdit } from '../../redux/Actions/DialogActions'

export default function FirstUser() {
  const disptach = useDispatch();
  return (
    <div id="FirstUser">
      <h4>No has configurado tu perfil aún<br />¿deseas hacerlo ahora?</h4>
      <Button onClick={() => disptach(showDialogEdit())}>Configurar Perfil</Button>
    </div>
  )
}
