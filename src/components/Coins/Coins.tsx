import React, { useCallback, useEffect, useState } from 'react'
import { getDataByPage, getDataLength } from '../../services/api';
import Coin from '../Coin/Coin';
import Search from '../Search/Search';
import { ICoins } from '../../utils/interface';
import * as S from './style';
import * as CoinStyle from '../Coin/style'

import { AiFillStar } from 'react-icons/ai'
import { MdNavigateNext, MdNavigateBefore} from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
import { BsCoin } from 'react-icons/bs'
import ReactPaginate from 'react-paginate';
import { loadFavorites } from '../../services/favorites';

const Coins = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [coins, setCoins] = useState<ICoins[] | null>(null);
  const [favorited, setFavorited] = useState<string[]>([]);

  const handlePageClick = (event: any) => {
    retrievePageData(event.selected + 1);
  }

  const retrievePageData = async (page: number) => {
      const response = await getDataByPage(page);
      setCoins(response);
  }
  
  const retrieveDataLength = useCallback(async () => {
    const response = await getDataLength();
    setPageCount(Math.ceil((response!/100)));
  }, [])

  useEffect(() => {
    retrievePageData(1)
    retrieveDataLength()
    setFavorited(loadFavorites())
  }, [])

  return (
    <S.Container>
      <Search />

      <S.Wrapper>
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
          coins?.map(coin => {
            const found = favorited?.find(element => element === coin.id)
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
            isFavorite={found ? true : false}
            />
            )
          })
        }

        <ReactPaginate 
        breakLabel={<SlOptions />}
        nextLabel={<MdNavigateNext size={25}/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<MdNavigateBefore size={25}/>}
        containerClassName='page-container'
        pageLinkClassName="page-link"
        />
      </S.Wrapper>      
    </S.Container>
  )
}

export default Coins