import { render } from '@testing-library/react'
import CardContact from '..'

describe('test CardContact', () => {
  it('should render without error', async () => {
    const { findByText } = render(
      <CardContact title="test123" subtitle="test234" />
    )
    expect(await findByText('test123')).toBeInTheDocument()
  })
})
