import React from 'react'

export const EstadoCarga = ({loading}) => {
  return loading ? <p>Cargando</p> : <p>Datos listos</p>
}
