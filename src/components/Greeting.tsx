import React from 'react'
import cx from 'classnames'
import { format } from 'date-fns'

export interface GreetingProps {
  className?: string
}

const Greeting: React.FC<GreetingProps> = ({ className }) => {
  const css = cx('', className)
  const today = new Date(Date.now())

  return (
    <div className={css}>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <h2 className="text-xl text-gray-800" data-testid="today-message">
        Today is {format(today, `do 'of' LLLL RRRR`)}
      </h2>
    </div>
  )
}

export default Greeting
