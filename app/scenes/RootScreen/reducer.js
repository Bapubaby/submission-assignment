import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';
export const {
  Types: rootScreenTypes,
  Creators: rootScreenActions
} = createActions({
  startup: null,
  requestFetchData: ['query'],
  successFetchData: ['data'],
  failureFetchData: ['errorMessage']
});

export const initialState = fromJS({
  data: {},
  IsLoading: false,
  dataErrorMessage: null
});

export const startup = state =>
  state.set('data', {}).set('dataErrorMessage', null);

export const requestFetchData = state => state.set('isLoading', true);

export const successFetchData = (state, { data }) =>
  state
    .set('data', data)
    .set('isLoading', false)
    .set('dataErrorMessage', null);

export const failureFetchData = (state, { errorMessage }) =>
  state
    .set('data', {})
    .set('isLoading', false)
    .set('dataErrorMessage', errorMessage);

export const rootContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case rootScreenTypes.STARTUP:
        return startup(state, action);
      case rootScreenTypes.REQUEST_FETCH_DATA:
        return requestFetchData(state, action);
      case rootScreenTypes.SUCCESS_FETCH_DATA:
        return successFetchData(state, action);
      case rootScreenTypes.FAILURE_FETCH_DATA:
        return failureFetchData(state, action);
      default:
        return state;
    }
  });
