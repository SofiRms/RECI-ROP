import React from 'react'


import { Infoinicio, Carousel, Intro } from '../components/'
import { NavBar } from '../ui/NavBar'

export const HomeScreen = () => {
  return (
    <>
      <NavBar/>
       <Carousel/>
       <Intro/>
       <Infoinicio/>
    </>
  )
}
