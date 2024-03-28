import './App.css'
import Navbar from './components/Navbar'
import Bar from './components/Bar'
import Hero from './components/Hero'
function App() {
  return (
    <div className='flex flex-col w-screen h-screen gap-4 bg-slate-100'>
      <Navbar />
      <Hero />
      <Bar />
    </div>
  )
}

export default App
