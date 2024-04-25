import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <h1>Bienvenue chez nous!</h1><br />
        <h2>Connectez-vous</h2>
        <form action="submit">
            <input type="text" placeholder='Entrez votre prénom...' required/>
            <button>Accéder à votre espace</button>
        </form>
    </div>
  )
}
