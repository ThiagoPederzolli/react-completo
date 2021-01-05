import React from 'react'
import Button from './Button'
import Input from './Input'

function Form() {
  return (
    <div>
      <Input id="email" label="Email"  required/>
      <Input id="senha" label="Senha" />
      <Button />
    </div>
  )
}

export default Form
