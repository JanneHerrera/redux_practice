import React, { useEffect, useState } from 'react'
import Candidate from './Candidate'
import { useDispatch, useSelector } from 'react-redux'
import { addCandidate } from '../store/mySlice'
import { Link } from 'react-router-dom'

function List() {
    const [candidatos, setCandidatos] = useState([])
    const workersList = useSelector(state=> state.misTrabajadores.trabajadores)
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=6")
        .then((response)=>response.json())
        .then((datos)=>setCandidatos(datos.results))
    }, [])

    const fetchOne = (index) =>{
        fetch("https://randomuser.me/api/?results=1")
        .then((response)=>response.json())
        .then((datos)=>{
            let provisional = [...candidatos]
            provisional[index] = {...datos.results[0]}

            setCandidatos(provisional)
        })
    }
        const saveOne = (valor, index) =>{
            const nuevoValor = {...valor, departamento:''}
            dispatch(addCandidate(nuevoValor))
            fetchOne(index)
        }
    
    return (
        <>
        <h1>Candidatos</h1>
        <Link to="/Manage"><button>trabajadores</button></Link>
        <div className='presentacion'>
        {candidatos.map((result, index)=>
             <Candidate valor={result} key={index} index={index} fetchOne={fetchOne} saveOne={saveOne}/>
            )}
        </div>
        <div className='candidatos'>
            {workersList.map((valor, i)=>
            <Link key ={i} to="/Manage" > <button>{valor.name.first} </button></Link>)}
        </div>
        </>
  )
}


export default List