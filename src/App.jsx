
import './App.css'
import { Header } from './Header'
import { Content } from './Content'
import { Footer } from './Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
