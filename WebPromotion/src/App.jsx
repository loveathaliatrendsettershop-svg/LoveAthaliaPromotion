import { Routes, Route } from 'react-router-dom'
import Header from './Features/Shared/Header'
import Footer from './Features/Shared/Footer'
import ScrollToTop from "./Features/Shared/ScrollTop";

// dito import pages
import Home from './pages/Home'
import FaqPage from './pages/Faq'
import AboutUs from './pages/AboutPage'  
import Guidelines from "./pages/GuidelinesPage"
import AllProduct from "./pages/Products"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop /> 
      <Header />

      {/* dito call pages */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/products" element={<AllProduct />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App