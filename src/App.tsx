import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { getTechnologyData } from './Api/TechService'
import ExploreSection from './components/ExploreSection/ExploreSection'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const technologyDataPromise = getTechnologyData();

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<p className="p-6 text-gray-500 flex items-center justify-center w-full text-center">Loading Technologies...</p>}>
        <ExploreSection technologiesPromise={technologyDataPromise} />
      </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
