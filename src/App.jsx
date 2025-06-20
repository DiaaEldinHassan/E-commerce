import { useState } from 'react'
import './App.css'
import Head from './Home/Head/Head'
import Cover from './Home/Cover/cover'
import About from './Home/About Us/about'
import Footer from './Home/Footer/Footer'

function App(props) {
  

  return (
  
    <div className="min-h-screen w-full bg-B100">
      <Head logged={props.setLogged}/>
      <Cover />
      <About />
      <Footer />
    </div>
  )
}

export default App
