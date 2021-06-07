import React, { useState } from 'react'
import cx from 'classnames'

export interface ClapProps {
  className?: string
  disabled?: boolean
}

const Clap: React.FC<ClapProps> = ({ className, disabled }) => {
  const [claps, setClaps] = useState(0)

  const css = cx(
    'px-6 py-3 text-lg font-bold rounded-full text-white bg-indigo-600 border border-transparent shadow-sm',
    className,
    { 'cursor-not-allowed opacity-70': disabled },
    {
      'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500':
        !disabled,
    }
  )

  return (
    <button
      onClick={() => setClaps(claps + 1)}
      className={css}
      disabled={disabled}
      data-testid="clap-button"
    >
      <span>👏 {claps}</span>
    </button>
  )
}

export default Clap
