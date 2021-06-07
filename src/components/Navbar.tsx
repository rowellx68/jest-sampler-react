import React from 'react'
import cx from 'classnames'
import Wrapper from 'components/Wrapper'

export interface NavbarProps {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const css = cx('bg-gray-800 text-white shadow-md', className)

  return (
    <nav className={css}>
      <Wrapper>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start">
            <div className="flex-shrink-0 flex items-stretch justify-start">
              <a className="font-bold">APP</a>
            </div>
            <div className="block ml-6">
              <div className="flex space-4">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar
