
export const RES_MENU_URL="https://www.swiggy.com/mapi/homepage/getCards?lat=17.34766216348099&lng=78.54476273059845";


export function filterData(searchText, allrestaurants) {
    let filterData = allrestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  }