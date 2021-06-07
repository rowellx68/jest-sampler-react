import axios from 'axios'
import { getJoke } from './jokes-service'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

test('getJoke calls the correct endpoint', async () => {
  axiosMock.get.mockResolvedValue({ data: {} })
  await getJoke()

  expect(axiosMock.get).toHaveBeenCalledWith('https://official-joke-api.appspot.com/joke/random')
})
