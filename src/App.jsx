import {EstadoCarga} from './components/EstadoCarga'
import {LoginStatus} from './components/LoginStatus'
import {Mensajes} from './components/Mensajes'
import {Notificaciones} from './components/Notificaciones'

function App() {
  

  return (
    <>
      <EstadoCarga loading={false}/>
      <LoginStatus/>
      <Mensajes hayMensajes={true}/>
      <Notificaciones cantidad={5}/>
    </>
  )
}

export default App
