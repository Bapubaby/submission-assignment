/**
 *
 * Tests for ExampleScreen
 *
 */

import React from 'react';
import { renderProvider } from 'app/utils/testUtils';
import { FavouritesScreenTest } from '../index';

describe('<FavouritesScreen /> Container tests', () => {
  let submitSpy;

  beforeAll(() => {
    submitSpy = jest.fn();
  });

  it('should load the favourites on mount', () => {
    renderProvider(<FavouritesScreenTest data={submitSpy} />);
    expect(submitSpy).toHaveBeenCalled();
  });
});
