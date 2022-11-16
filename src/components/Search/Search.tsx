import React, { useRef } from 'react'
import * as S from './style'
import { AiOutlineSearch } from 'react-icons/ai'
import { ICoins } from '../../utils/interface'
import { getDataById } from '../../services/api'

interface IProps {
  state: ICoins[] | null,
  setState: React.Dispatch<React.SetStateAction<ICoins[] | null>>
  firstPage: ICoins[] | null
}

const Search = ({state, setState, firstPage}:IProps) => {
  const search = useRef<HTMLInputElement | null>(null);
  
  const retrieveData = async (id: string) => {
    const response = await getDataById(id)
    setState(response);
  }

  const handleSearch = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter'){
      if (search.current?.value){
        retrieveData(search.current.value.toLowerCase());
      } else {
        setState(firstPage)
      }
    }
  }

  return (
    <S.Container>
      <AiOutlineSearch size={20}/>
      <S.SearchInput placeholder='Search a coin' ref={search} onKeyDown={handleSearch}/>
    </S.Container>
  )
}

export default Search