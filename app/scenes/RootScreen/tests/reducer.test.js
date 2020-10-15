import {
  rootContainerReducer,
  initialState,
  rootScreenTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Tests for reducers used in the ExampleScreen', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(rootContainerReducer(undefined, {})).toEqual(state);
  });

  it('should ensure that isLoading = true when an action of type REQUEST_FETCH_DATA is dispatched', () => {
    const expectedResult = state
      .set('isLoading', true)
      .set('dataErrorMessage', null);
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.REQUEST_FETCH_DATA,
        data: {
          bank: 'Karnataka Bank',
          ifsc: 'KARB0000001',
          branch: 'RTGS-HO',
          address:
            'REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002',
          contact: '2228222',
          city: 'DAKSHINA KANNADA',
          rtgs: true,
          district: 'MANGALORE',
          state: 'KARNATAKA'
        }
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the user data is present and isLoading = false when SUCCESS_FETCH_DATA is dispatched', () => {
    const expectedResult = state
      .set('data', {
        bank: 'Karnataka Bank',
        ifsc: 'KARB0000001',
        branch: 'RTGS-HO',
        address:
          'REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002',
        contact: '2228222',
        city: 'DAKSHINA KANNADA',
        rtgs: true,
        district: 'MANGALORE',
        state: 'KARNATAKA'
      })
      .set('isLoading', false)
      .set('dataErrorMessage', null);
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.SUCCESS_FETCH_DATA,
        user: {
          bank: 'Karnataka Bank',
          ifsc: 'KARB0000001',
          branch: 'RTGS-HO',
          address:
            'REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002',
          contact: '2228222',
          city: 'DAKSHINA KANNADA',
          rtgs: true,
          district: 'MANGALORE',
          state: 'KARNATAKA'
        }
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the dataErrorMessage has some data and userLoading = false when FAILURE_FETCH_DATA is dispatched', () => {
    const expectedResult = state
      .set('data', {})
      .set('isLoading', false)
      .set('dataErrorMessage', 'There was some error bro');
    expect(
      rootContainerReducer(state, {
        type: rootScreenTypes.FAILURE_FETCH_DATA,
        errorMessage: 'IFSC Code wrong or Server not Responding'
      })
    ).toEqual(expectedResult);
  });
});
