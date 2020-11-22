import React from 'react';
import { render } from '@testing-library/react';
import SubHeaderText from './SubHeaderText';

describe('<SubHeaderText/>', () => {
  it('Matches snapshot', () => {
    const subHeaderText = render(<SubHeaderText />);
    expect(subHeaderText).toMatchSnapshot();
  });
});
