import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Error from './Error';

describe('<Error/>', () => {
  it('Matches snapshot', () => {
    const error = render(
      <Router>
        <Error />
      </Router>
    );
    expect(error).toMatchSnapshot();
  });
});
