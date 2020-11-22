import React from 'react';
import { render } from '@testing-library/react';
import HeaderText from './HeaderText';

describe('<HeaderText/>', () => {
  it('Matche snapshot', () => {
    const headerText = render(<HeaderText />);
    expect(headerText).toMatchSnapshot();
  });
});
