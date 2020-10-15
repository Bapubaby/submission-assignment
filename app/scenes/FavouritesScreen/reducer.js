import { createActions } from 'reduxsauce';
import produce from 'immer';
export const {
  Types: favouritesScreenTypes,
  Creators: favouritesScreenActions
} = createActions({
  setFavourites: ['data']
});

export const initialState = {
  favourites: []
};

export const setFavourites = (state, { data }) => {
  const currentFavourites = [...state.favourites];
  let isPresent = false;
  currentFavourites.forEach(item => {
    if (item.ifsc === data.ifsc) {
      isPresent = true;
    }
  });
  if (!isPresent) {
    currentFavourites.push(data);
  }
  return {
    ...state,
    favourites: currentFavourites
  };
};

export const favouritesContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case favouritesScreenTypes.SET_FAVOURITES:
        return setFavourites(state, action);
      default:
        return state;
    }
  });
