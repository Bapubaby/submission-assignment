import {
  favouritesContainerReducer,
  initialState,
  favouritesScreenTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Tests for reducers used in the FavouritesScreen', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(favouritesContainerReducer(undefined, {})).toEqual(state);
  });

  it('should ensure that the data is added to favourites when SET_FAVOURITES is dispatched', data => {
    const expectedResult = state.set('user', data);
    expect(
      favouritesContainerReducer(state, {
        type: favouritesScreenTypes.SET_FAVOURITES,
        user: data
      })
    ).toEqual(expectedResult);
  });
});
