import React from 'react';
import { render } from '@testing-library/react';
import ExternalLinkButton from './ExternalLinkButton';

describe('<ExternalLinkButton/>', () => {
  it('Matches snapshot', () => {
    const externalLinkButton = render(<ExternalLinkButton />);
    expect(externalLinkButton).toMatchSnapshot();
  });
});
