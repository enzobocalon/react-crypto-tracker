import React from 'react'
import { ICoins } from '../../utils/interface'
import { AiOutlineStar } from 'react-icons/ai'
import * as S from './style'

const Coin = ({
  id, 
  name, 
  image, 
  current_price,
  price_change_percentage_24h,
  price_change_percentage_1h_in_currency,
  price_change_percentage_7d_in_currency
}: ICoins) => {
  return (
    <S.Row>
      <S.Favorite>
        <AiOutlineStar size={24}/>
      </S.Favorite>
      
      <S.Icon>
        <img src={image} />
      </S.Icon>
      <S.Name>
        {name}
      </S.Name>

      <S.Price>
        {current_price ? `US$ ${current_price.toFixed(2)}` : '?'}
      </S.Price>

      <S.Variation>{
      price_change_percentage_1h_in_currency ? price_change_percentage_1h_in_currency.toFixed(2) : '?'
      }</S.Variation>
      <S.Variation>{
      price_change_percentage_24h ? price_change_percentage_24h.toFixed(2) : '?'
      }</S.Variation>
      <S.Variation>{
      price_change_percentage_7d_in_currency ? price_change_percentage_7d_in_currency.toFixed(2) : '?'
      }</S.Variation>
    </S.Row>
  )
}

export default Coin