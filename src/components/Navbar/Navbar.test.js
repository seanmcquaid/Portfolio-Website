import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('<Navbar/>', () => {
  it('Matches snapshot', () => {
    const history = createMemoryHistory();
    const navbar = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
    expect(navbar).toMatchSnapshot();
  });

  it('Hamburger menu toggle works', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    act(() => {
      window.innerWidth = 320;
      window.innerHeight = 568;

      fireEvent(window, new Event('resize'));
    });

    fireEvent.click(getByTestId('mobileMenuToggleButton'));

    expect(getByTestId('mobileAboutLink')).toBeVisible();
  });

  it('Mobile menu toggle works', () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    act(() => {
      window.innerWidth = 320;
      window.innerHeight = 568;

      fireEvent(window, new Event('resize'));
    });

    fireEvent.click(getByTestId('mobileMenuToggleButton'));

    fireEvent.click(getByTestId('homeButton'));

    expect(getByTestId('mobileAboutLink')).not.toBeVisible();
  });
});
