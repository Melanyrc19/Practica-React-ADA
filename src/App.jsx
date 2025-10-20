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
      <p>Estado de Carga:</p>
      <EstadoCarga loading={true}/>
      <p>LoginStatus:</p>
      <LoginStatus isLoggedIn={true} />
      <p>Mensajes:</p>
      <Mensajes hayMensajes={true}/>
      <p>Notificaciones:</p>
      <Notificaciones cantidad={5}/>
      <p>Contador:</p>
      <Contador/>
      <p>Formulario</p>
      <Formulario/>
      <p>Lista de Items:</p>
      <Lista/>
    </>
  )
}

export default App
