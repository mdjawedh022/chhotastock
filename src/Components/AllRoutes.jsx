import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLanding from '../Pages/MainLanding'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLanding/>}/>

      </Routes>
    </>
  )
}

export default AllRoutes
