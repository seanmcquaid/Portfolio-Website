import React from 'react';
import { render } from '@testing-library/react';
import Project from './Project';

describe('<Project/>', () => {
  it('Snapshot matches', () => {
    const props = {
      title: 'Portfolio',
      image: 'https://via.placeholder.com/150',
      description: 'Portfolio website',
      repoLink: 'www.github.com/seanmcquaid',
      projectId: 1,
    };
    const project = render(<Project {...props} />);
    expect(project).toMatchSnapshot();
  });
});
