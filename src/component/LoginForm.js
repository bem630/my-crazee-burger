import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (event) => { 
        setInputValue(event.target.value)
     }
     const handleSubmit = () => { 
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
      }
  return (
    <div>
        <Welcome/>
        <form action="submit" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                placeholder='Entrez votre prénom...' 
                required
                onChange={handleChange}

            />
            <button>Accéder à votre espace</button>
        </form>
    </div>
  )
}
