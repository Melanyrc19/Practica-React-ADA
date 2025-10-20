import React from 'react'
import { useState } from 'react'


function Lista() {
    const [items, setItems] = useState([])
    const [nuevoItem, setNuevoItem] = useState('')

    const agregarItem = () => { 
        setItems([...items, nuevoItem])
        setNuevoItem('')
    }

    return (
        <>
            <input value={nuevoItem} onChange={(e) => setNuevoItem(e.target.value)} type="text" />
            <button onClick={agregarItem}>Agregar Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Lista