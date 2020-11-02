import React, { useState, createContext } from 'react'

export const HamburgerContext = createContext()

export const HamburgerProvider = ({ children }) => {
  const [toggleClass, setToggleClass] = useState('hamburger hamburger--minus')

  return (
    <HamburgerContext.Provider value={[toggleClass, setToggleClass]}>
      {children}
    </HamburgerContext.Provider>
  )
}