import { fromJS } from 'immutable';
import {
  selectData,
  selectDataIsLoading,
  selectDataErrorMessage
} from '../selectors';

describe('Tests for selectors to get data from state for the rootScreen', () => {
  let mockedState;
  let ifsc;
  let isLoading;
  let dataErrorMessage;

  beforeEach(() => {
    ifsc = 'KARB0000001';
    dataErrorMessage = 'Some error';
    isLoading = false;

    mockedState = {
      example: fromJS({
        user: {
          ifsc
        },
        dataErrorMessage,
        isLoading
      })
    };
  });

  it('should select the data state', () => {
    const dataSelector = selectData();
    expect(dataSelector(mockedState)).toEqual({ ifsc });
  });

  it('should select isLoading', () => {
    const dataIsLoadingSelector = selectDataIsLoading();
    expect(dataIsLoadingSelector(mockedState)).toEqual(isLoading);
  });

  it('should select the userErrorMessage', () => {
    const dataErrorMessageSelector = selectDataErrorMessage();
    expect(dataErrorMessageSelector(mockedState)).toEqual(dataErrorMessage);
  });
});
