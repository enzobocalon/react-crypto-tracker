export interface ICoins {
  id: string,
  name: string,
  image: string,
  current_price: number,
  price_change_percentage_24h: number,
  price_change_percentage_1h_in_currency: number,
  price_change_percentage_7d_in_currency: number,
  isFavorite: boolean
}