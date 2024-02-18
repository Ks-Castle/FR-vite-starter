//How to use svg in react + vite
//https://www.npmjs.com/package/vite-plugin-svgr

/// <reference types="vite-plugin-svgr/client" />

// import Logo from '@/assets/Chrome_Hearts.svg?react'
import logo from '@/assets/Chrome_Hearts.svg'

export const HeaderImage = () => {
  return (
    <div className="bg-indigo-300">
      {/* <Logo /> */}
      <img className="w-1/3" src={logo} alt="Logo" />
    </div>
  )
}
