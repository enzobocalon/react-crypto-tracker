import React, { useEffect, useState } from 'react'
import * as Table from '../Coins/style'
import * as CoinStyle from '../Coin/style'
import { BsCoin } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { loadFavorites } from '../../services/favorites'
import { getDataById } from '../../services/api'
import { ICoins } from '../../utils/interface'
import Coin from '../Coin/Coin'

const Favorites = () => {
  const [favorited, setFavorited] = useState<ICoins[] | null>(null);

  const retrieveFavorites = async () => {
      const ids = loadFavorites()
      const response = await getDataById(ids.join(","));
      setFavorited(response);
  }

  useEffect(() => {
    retrieveFavorites()
  }, [])

  return (
    <Table.Container>
      <Table.Wrapper>

        <CoinStyle.Row>
            <CoinStyle.Favorite><AiFillStar size={25} /></CoinStyle.Favorite>
            <CoinStyle.Icon><BsCoin size={25}/></CoinStyle.Icon>
            <CoinStyle.Name>Coin</CoinStyle.Name>
            <CoinStyle.Price>Price</CoinStyle.Price>
            <CoinStyle.Variation>1h (%)</CoinStyle.Variation>
            <CoinStyle.Variation>1d (%)</CoinStyle.Variation>
            <CoinStyle.Variation>7d (%)</CoinStyle.Variation>
          </CoinStyle.Row>
          {
          favorited?.map(coin => {
            return (
            <Coin 
            id={coin.id} 
            name={coin.name} 
            image={coin.image} 
            current_price={coin.current_price} 
            price_change_percentage_24h={coin.price_change_percentage_24h}
            price_change_percentage_1h_in_currency={coin.price_change_percentage_1h_in_currency}
            price_change_percentage_7d_in_currency={coin.price_change_percentage_7d_in_currency}
            key={coin.id}
            isFavorite={true}
            />
            )
          })
        }
      </Table.Wrapper>
    </Table.Container>
  )
}

export default Favorites