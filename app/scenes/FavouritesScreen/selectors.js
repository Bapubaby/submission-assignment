import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectFavouritesDomain = state => state.favourites || initialState;

export const selectFavourites = () =>
  createSelector(selectFavouritesDomain, substate =>
    get(substate, 'favourites', [])
  );
