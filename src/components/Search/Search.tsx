import React from 'react'
import * as S from './style'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <S.Container>
      <AiOutlineSearch size={20}/>
      <S.SearchInput placeholder='Search a coin'/>
    </S.Container>
  )
}

export default Search