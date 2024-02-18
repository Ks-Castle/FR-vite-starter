import { Button } from '@/components/UI/Button/Button'
import { HeaderImage } from '@/components/UI/HeaderImage/HeaderImage'
import React from 'react'
import background from '@/assets/background.png'
import background2 from '@/assets/background2.jfif'

const Home = () => {
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${background2})` }}
    >
      <HeaderImage />
      {/* <Button label="ab" /> */}
    </div>
  )
}

export default Home
