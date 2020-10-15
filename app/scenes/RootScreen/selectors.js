import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectRootDomain = state => (state.root || initialState).toJS();

export const selectData = () =>
  createSelector(selectRootDomain, substate => get(substate, 'data', null));

export const selectDataIsLoading = () =>
  createSelector(selectRootDomain, substate =>
    get(substate, 'isLoading', null)
  );

export const selectDataErrorMessage = () =>
  createSelector(selectRootDomain, substate =>
    get(substate, 'dataErrorMessage', null)
  );
