import React from 'react'
import '../Styles/Dashboard/UserMessage.css'

export default function UserMessage(props: any) {
  const [showMessage, setShowMessage] = React.useState("d-none")
  React.useEffect(() => {
    setTimeout(() => {autoShowMessage()}, 3000)
    setTimeout(() => {handleCloseMessage()}, 300000)
  }, [])
  const autoShowMessage = () =>{
    setShowMessage("")
    setTimeout(() => {
      setShowMessage("messageShow")
    }, 200)
  }
  const handleCloseMessage = () =>{
    setShowMessage("messageHide")
    setTimeout(() => {
      setShowMessage("messageHide d-none")
    }, 800)
  }
  return (
    <div id="userMessage" className={showMessage}>
      <span className="closeMessage" onClick={handleCloseMessage} >Cerrar</span>
      <p className="header">¿Quieres darte de baja como EXPERTO o ASOCIACIÓN en nuestra comunidad?</p>
      <p className="body">Ingresa desde aquí para explicarte como puedes hacerlo.</p>
    </div>
  )
}
