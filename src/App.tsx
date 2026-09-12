import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { getTechnologyData } from './Api/TechService'
import ExploreSection from './components/ExploreSection/ExploreSection'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'

const technologyDataPromise = getTechnologyData();

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loading />}>
        <ExploreSection technologiesPromise={technologyDataPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
