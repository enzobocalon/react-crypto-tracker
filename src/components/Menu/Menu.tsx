import React from 'react'
import * as S from './style'
import { AiFillHome, AiFillStar } from 'react-icons/ai';

const Menu = () => {
  return (
    <S.Container>
      <h1>Crypto Tracker</h1>
      <S.Nav>
        <S.NavItem>
          <AiFillHome size={20}/>
          <span>Home</span>
        </S.NavItem>
        <S.NavItem>
          <AiFillStar size={20}/>
          <span>Favorites</span>
        </S.NavItem>
      </S.Nav>
    </S.Container>
  )
}

export default Menu