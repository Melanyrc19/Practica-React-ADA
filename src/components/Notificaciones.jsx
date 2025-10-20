import React from 'react'

export const Notificaciones = ({cantidad}) => {
  if(cantidad > 0){
    return <p>Tienes {cantidad} notificaciones</p>
  } else {
    return null
  }
}
