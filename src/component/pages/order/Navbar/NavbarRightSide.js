import React from 'react'
import Profile from './Profile'
import styled from 'styled-components'

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
      <Profile username={username}/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */

  .profile {
    background: yellow;
  }
`
