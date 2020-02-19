import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Facts from './App.js'
import App from './App.js'

afterEach(cleanup)

test('tries to load facts for nonsense url', () => {
  const data = []
  const testUrl = 'url'
  const loading = false

  const component = render(
    <Facts message={data} baseUrl={testUrl} loading={loading} />
  )

  expect(component.container).toHaveTextContent(
    'Loading...'
  )
})


/*/
test('clicking the button calls event handler twice', async () => {

  const mockHandler = jest.fn()
  const { getByText } = render(
    <App/>
  )

  const button = getByText('Fetch new set of facts!')

  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockHandler.mock.calls.length).toBe(2)

})
*/
