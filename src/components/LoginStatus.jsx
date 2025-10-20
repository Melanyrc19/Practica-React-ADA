import React from 'react'

export const LoginStatus = ({isLoggedIn}) => {
  if(isLoggedIn){
     return <p>Bienvenido</p>
  } else {
     return (<p>"Debes iniciar sesion"</p>)
  }

}
