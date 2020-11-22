import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import Projects from './Projects';
import '@testing-library/jest-dom/extend-expect';

describe('<Projects/>', () => {
  afterEach(cleanup);
  it('Matches snapshot', () => {
    const projects = render(<Projects />);
    expect(projects).toMatchSnapshot();
  });
  it('LoadingSpinner is visible on initial load', async () => {
    const { getByTestId } = render(<Projects />);
    expect(getByTestId('loadingSpinner')).toBeVisible();
  });
  it('Projects Page Displays after 1.5 seconds', async () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<Projects />);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(() => getByTestId('loadingSpinner')).toThrowError();
    expect(getByTestId('projectsPageHeader')).toBeVisible();
  });
});
