import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from "../../../theme"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import Button from '../../reusable-ui/Button'
import TextInput from '../../reusable-ui/TextInput'

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
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <Welcome/>
            <TextInput 
                value={inputValue} 
                placeholder={'Entrez votre prénom'} 
                required
                onChange={handleChange}
                Icon={<BsPersonCircle className="icon"/>}
            />
            <Button 
                label={"Accéder à mon espace"}
                Icon={<IoChevronForward className="icon"/>}
            />
        </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`