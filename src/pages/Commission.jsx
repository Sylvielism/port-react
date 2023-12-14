import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'
import ImageBrightness from '../components/ImageBrightness'
import Comdetail from '../components/Comdetail'


const Commission = () => {
  return (
    <>
        <Navbar></Navbar>
        <Body></Body>
        <Comdetail></Comdetail>
        <ImageBrightness></ImageBrightness>
        <Body></Body>
        <Footer></Footer>
    </>
  )
}

export default Commission