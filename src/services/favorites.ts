export const loadFavorites = () => {
  const result = localStorage.getItem('coins');
  if (result) {
    return JSON.parse(result);
  }
}

export const saveFavorite = (state: string) => {
  const favorites = loadFavorites();
  const items = favorites ? favorites : [];

  if (!favorites) { 
    items.push(state);
    localStorage.setItem('coins', JSON.stringify(items));
  }
  
  const canBeFavorited = favorites.every((coin: string) => coin !== state);
  if (canBeFavorited) {
    items.push(state);
    localStorage.setItem('coins', JSON.stringify(items));
  } else {
    localStorage.setItem('coins', JSON.stringify(favorites.filter((coin: string) => coin !== state)));
  }
}