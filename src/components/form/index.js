import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-4'></div>
        <div className='col-4 text-center'>
            <img className='logo' src='./usuario.png' alt='' />
            <input className='' type='text' placeholder='Username' />
            <input className='' type='password' placeholder='Password' />            
        </div>
        <button className='boton'>
            LOGIN
        </button>
        <div className='col-4'></div>
        </div>
    </div>
  )
}

