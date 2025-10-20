import React from 'react'
import { useState } from 'react'



const tarea = () => {
    return (
        <>
        </>
    )
}
 const Lista = () => {
    const [tareas, setTareas] = useState([])


  return (
    <div>
        <input onChange={(e) => setTareas(e.target.value)}  type="text" />
        <button></button>
        <ul>
            {tareas.map((tarea, index) => (
                <li key={index}>{tarea}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lista