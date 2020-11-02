import React, { useState, createContext } from 'react'

export const NavLinksContext = createContext()

export const NavLinksProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState({
 section: "about"
  })

  return (
    <NavLinksContext.Provider value={[navLinks, setNavLinks]}>
      {children}
    </NavLinksContext.Provider>
  )
}