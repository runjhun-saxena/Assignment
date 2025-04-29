import React from 'react'
import Home from "./pages/Landing_pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="pt-20">  
  <Home />
</main>
  <Footer />
</div>

  )
}

export default App