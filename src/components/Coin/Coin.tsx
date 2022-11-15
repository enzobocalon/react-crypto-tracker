import React, { useState, useEffect } from 'react'
import { ICoins } from '../../utils/interface'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import * as S from './style'
import { saveFavorite } from '../../services/favorites'

const Coin = ({
  id, 
  name, 
  image, 
  current_price,
  price_change_percentage_24h,
  price_change_percentage_1h_in_currency,
  price_change_percentage_7d_in_currency,
  isFavorite
}: ICoins) => {
  const [star, setStar] = useState(false);

  const handleFavorite = () => {
    setStar(prev => !prev);
    saveFavorite(id);
  }
  console.log(star)
  useEffect(() => {
    setStar(isFavorite)
  }, [])

  return (
    <S.Row>
      <S.Favorite onClick={handleFavorite} favorite={star}>
        <AiOutlineStar size={24} className='star'/>
        <AiFillStar size={24} className='star-full'/>
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