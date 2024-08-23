import { render, screen } from '@testing-library/react';
import { AboutMe } from '../../components/AboutMe';

const user = {
  name: 'Simon Bui',
  blurb: 'Some interesting info'
}

test('AboutMe component renders user name and blurb', () => {
  render(<AboutMe user={user} />)

  const nameText = screen.getByText(user.name)
  const blurbText = screen.getByText(user.blurb)

  expect(nameText).toBeInTheDocument()
  expect(blurbText).toBeInTheDocument()
});
