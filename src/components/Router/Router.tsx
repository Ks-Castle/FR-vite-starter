import React from 'react'
import { Routes, Route } from 'react-router-dom'
import navigation from './navigation.json'
import * as Lazy from './lazy'

const Router = () => {
  return (
    <Routes>
      <Route path={navigation.Home.path} element={<Lazy.Home />} />
      <Route path={navigation.Detail.path} element={<Lazy.Detail />} />
    </Routes>
  )
}

export default Router
