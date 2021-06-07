import axios from 'axios'

export interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

export const getJoke = async (): Promise<Joke> => {
  const { data } = await axios.get<Joke>('https://official-joke-api.appspot.com/jokes/random')
  return data
}
