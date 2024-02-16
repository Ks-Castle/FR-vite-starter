//How to use svg in react + vite
//https://www.npmjs.com/package/vite-plugin-svgr

/// <reference types="vite-plugin-svgr/client" />

import './HeaderImage.css'
import Logo from '../../../assets/Chrome_Hearts.svg?react'

export const HeaderImage = () => {
  return (
    <div>
      <Logo />
    </div>
  )
}
