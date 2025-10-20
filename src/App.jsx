import {EstadoCarga} from './components/EstadoCarga'
import {LoginStatus} from './components/LoginStatus'
import {Mensajes} from './components/Mensajes'
import {Notificaciones} from './components/Notificaciones'
import {Contador} from './components/clase5./Contador'
import {Formulario} from './components/clase5./Formulario'
import  Lista from './components/clase5./Lista'

function App() {
  

  return (
    <>
      <EstadoCarga loading={true}/>
      <LoginStatus/>
      <Mensajes hayMensajes={true}/>
      <Notificaciones cantidad={5}/>
      <Contador/>
      <Formulario/>
      <Lista/>
    </>
  )
}

export default App
