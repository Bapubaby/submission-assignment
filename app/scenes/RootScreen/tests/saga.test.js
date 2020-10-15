/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchBankData } from 'app/services/UserService';
import { apiResponseGenerator } from '../../../utils/testUtils';
import rootScreenSaga, { fetchData } from '../saga';
import { rootScreenTypes } from '../reducer';

describe('Tests for the sagas used in the RootScreen', () => {
  const generator = rootScreenSaga();

  it('should start task to watch for REQUEST_FETCH_DATA action', () => {
    expect(generator.next().value).toEqual(
      takeLatest(rootScreenTypes.REQUEST_FETCH_USER, fetchData)
    );
  });

  it('should ensure that the action FAILURE_FETCH_DATA is dispatched when the api call fails', query => {
    const method = fetchData(query);
    const res = method.next().value;
    expect(res).toEqual(call(fetchBankData, query));
    expect(method.next(apiResponseGenerator(false)).value).toEqual(
      put({
        type: rootScreenTypes.FAILURE_FETCH_DATA,
        errorMessage: 'IFSC Code wrong or Server not Responding'
      })
    );
  });

  it('should ensure that the action SUCCESS_FETCH_DATA is dispatched when the api call succeeds', query => {
    const method = fetchData(query);
    const res = method.next().value;
    expect(res).toEqual(call(fetchBankData, query));
    const dataResponse = {
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
    expect(
      method.next(apiResponseGenerator(true, [dataResponse])).value
    ).toEqual(
      put({ type: rootScreenTypes.SUCCESS_FETCH_DATA, user: dataResponse })
    );
  });
});
