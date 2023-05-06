import React from 'react'

function Logo() {
  return (
    <img alt="Logo" className='hidden md:block cursor-pointer' height="100" width="100" src={process.env.PUBLIC_URL + '/imgs/logo.png'} />
  )
}

export default Logo