import { selectFavourites } from '../selectors';

describe('Tests for selectors to get data from state for the ExampleScreen', () => {
  let mockedState;
  let data;

  beforeEach(() => {
    data = {
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
    };

    mockedState = {
      favourites: [data]
    };
  });

  it('should select the favourites state', () => {
    const userSelector = selectFavourites();
    expect(userSelector(mockedState)).toEqual({ data });
  });
});
