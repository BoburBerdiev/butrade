import React from 'react'

const InputUI = ({type , clasName , placeholder, onChange}) => {
  return (
    <>
      <input type={type} className={clasName} placeholder={placeholder} onChange={onChange} /> 
    </>
  )
}

export default InputUI