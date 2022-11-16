import axios from 'axios'

export const getDataByPage = async (page: number) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`);
  return response.data;
}

export const getDataLength = async () => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list`);
  if (response.data instanceof Array) {
    return response.data.length;
  }
}

export const getDataById = async (id: string) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
  return response.data;
}