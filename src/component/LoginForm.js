import React from 'react'
import { useState } from 'react'

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (event) => { 
        setInputValue(event.target.value)
     }
     const handleSubmit = (event) => { 
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
      }
  return (
    <div>
        <h1>Bienvenue chez nous!</h1><br />
        <h2>Connectez-vous</h2>
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
