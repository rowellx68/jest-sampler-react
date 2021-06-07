import React from 'react'
import cx from 'classnames'

export interface WrapperProps {
  className?: string
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  const css = cx('container mx-auto px-4 sm:px-6 lg:px-8', className)

  return <div className={css}>{children}</div>
}

export default Wrapper
