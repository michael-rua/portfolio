import React, { useState, createContext } from 'react'

export const NavLinksContext = createContext()

export const NavLinksProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState({
    hero: 'false',
    about: 'false',
    services: 'false',
    work: 'fasle',
    contact: 'false'
  })

  return (
    <NavLinksContext.Provider value={[navLinks, setNavLinks]}>
      {children}
    </NavLinksContext.Provider>
  )
}