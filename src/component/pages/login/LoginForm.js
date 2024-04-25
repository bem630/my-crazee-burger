import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
    //state
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    //comportement
    const handleChange = (event) => { 
        setInputValue(event.target.value)
     }
     const handleSubmit = (event) => {
        event.preventDefault() 
        navigate(`order/ ${inputValue}`)
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
