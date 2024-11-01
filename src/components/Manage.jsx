import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Trabajador from './Trabajador'
import { modificarUnValor, eliminarUnValor } from '../store/mySlice'

function Manage() {
    const workersList = useSelector(state => state.misTrabajadores.trabajadores)
    const dispatch = useDispatch()
    const actualizar= (pais, index)=>{
        dispatch(modificarUnValor({
            index,
            nuevoContinente:pais,
        }))
    }
    const eliminar = (valor)=>{dispatch(eliminarUnValor({
        nombre: valor.name.first,
        apellido:valor.name.last,
        telefono:valor.cell
    }))}
    return (
    <div>
    <h1>Trabajadores:</h1>
    <Link to='candidatos'><button>candidatos</button></Link>
    <div className='usuarios'>
        {workersList.map((valor, index) => <Trabajador key={index} valor={valor} index={index} onActualizar={actualizar} onEliminar={eliminar}/>)}
    </div>
    </div>
  )
}

export default Manage