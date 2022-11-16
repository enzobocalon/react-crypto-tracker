import React from 'react'
import * as S from './style'
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <S.Container>
      <h1>Crypto Tracker</h1>
      <S.Nav>
        <Link to='/'>
          <S.NavItem>
            <AiFillHome size={20}/>
            <span>Home</span>
          </S.NavItem>
        </Link>

        <Link to='/favorites'>
          <S.NavItem>
            <AiFillStar size={20}/>
            <span>Favorites</span>
          </S.NavItem>
        </Link>
      </S.Nav>
    </S.Container>
  )
}

export default Menu