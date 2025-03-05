import React from 'react'
import"./App.css"
import Navbar from './components/Navbar/Navbar'
import Content from './components/content/Content'
import Class from './components/classes/Class'
import Reg from './components/registration/Reg'
import Plans from './components/plans/Plans'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
    <Navbar/>
    <Content/>
    <Class/>
    <Plans/>
    <Reg/> 
    <Contact/>
    <Footer/>

   </div>
  )
}

export default App
