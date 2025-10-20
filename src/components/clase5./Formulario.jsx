import React from 'react'
import { useState } from 'react'

export const Formulario = () => {

    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')




  return (
    <>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
      <input value={apellido} onChange={(e)=>setApellido(e.target.value)} type="text" />
      <p>{name} {apellido}</p>
    </>
  )
}
