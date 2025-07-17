import { useState } from 'react';
import './App.css';
import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import './index.css';
import { Projects } from './components/section/Projects';
import { Social } from './components/section/Social';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)}/>}{""}
        <div className={'min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100'}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Projects/>
          <Social/>
        </div>
    </>
  )
}

export default App
