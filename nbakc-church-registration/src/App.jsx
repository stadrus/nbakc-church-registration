
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import {Routes, Route, HashRouter} from "react-router-dom"
import Admin from './user components/Admin'

console.log(import.meta.env.VITE_CLIENT_ID);

function App() {

  return (
    <>
     <HashRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Admin" element={<Admin />}> </Route>
      </Routes>
      <Footer />
     </HashRouter>
    </>
  )
}

export default App
