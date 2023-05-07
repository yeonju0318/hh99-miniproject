import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const navigate = useNavigate()
  return (
    <img 
    onClick={() => navigate('/')}
    alt="Logo" className='z-20 block cursor-pointer' height="100" width="100" src={process.env.PUBLIC_URL + '/imgs/logo.png'} />
  )
}

export default Logo