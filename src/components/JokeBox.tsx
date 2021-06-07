import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { getJoke, Joke } from 'services/jokes-service'

export interface JokeBoxProps {
  className?: string
}

const JokeBox: React.FC<JokeBoxProps> = ({ className }) => {
  const css = cx('shadow rounded-lg overflow-hidden', className)

  const [joke, setJoke] = useState<Joke>()
  const getAnotherJoke = () => {
    getJoke().then((joke) => setJoke(joke))
  }

  useEffect(getAnotherJoke, [])

  return (
    <div className={css}>
      <div className="px-4 py-5 bg-white space-y-2 sm:p-6">
        <div data-testid="joke-setup" className="text-2xl">
          {joke?.setup}
        </div>
        <div
          data-testid="joke-punchline"
          className="text-lg italic select-none text-gray-800 bg-gray-800 hover:bg-transparent p-1 rounded cursor-pointer"
        >
          {joke?.punchline}
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={getAnotherJoke}
        >
          Another Joke
        </button>
      </div>
    </div>
  )
}

export default JokeBox
