import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'

export default function LoginForm() {
    //state
    const [inputValue, setInputValue] = useState("")

    //comportement
    const handleChange = (event) => { 
        setInputValue(event.target.value)
     }
     const handleSubmit = (event) => {
        event.preventDefault() 
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
      }
      //affichage
  return (
        <form action="submit" onSubmit={handleSubmit}>
            <Welcome/>
            <input 
                type="text" 
                value={inputValue} 
                placeholder='Entrez votre prénom...' 
                required
                onChange={handleChange}
            />
            <button>Accéder à votre espace</button>
        </form>
  )
}
