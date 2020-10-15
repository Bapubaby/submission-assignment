import React from 'react';
import { renderProvider } from '../../../utils/testUtils';
import { RootScreenTest } from '../index';

describe('<RootScreen /> Container tests', () => {
  let submitSpy;

  beforeAll(() => {
    submitSpy = jest.fn();
  });

  it('should fetch the user data on mount', () => {
    renderProvider(<RootScreenTest fetchData={submitSpy} />);
    expect(submitSpy).toHaveBeenCalled();
  });
  it('should render ActivityIndicator if isLoading is true', () => {
    const { getByTestId } = renderProvider(
      <RootScreenTest fetchData={submitSpy} isLoading />
    );

    expect(getByTestId('loader').type).toBe('ActivityIndicator');
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not render ActivityIndicator if isLoading is false, should instead render rootContainerContent', () => {
    const { getByTestId } = renderProvider(
      <RootScreenTest fetchUser={submitSpy} isLoading={false} />
    );
    expect(getByTestId('example-container-content').type).toBe('View');
    expect(submitSpy).toHaveBeenCalled();
  });
});
