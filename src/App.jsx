import React from 'react'
import Header from './components/header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Card from './components/Card.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx' // Uncomment this line if you want to use the Footer component  
function App() {
  const data = [
    {image:"https://img.icons8.com/emoji/48/blueberries.png", 
      name:"abcd",
    },
      {image:"src/assets/logo.png",
      name:"abhinav",
    },
  ]
 
  return (
    
    <div>
      <Header />
      <HeroSection />
      <Footer />
      <div className='flex flex-wrap justify-center gap-4 p-6'>
        {data.map((item, index) => (
          <Card key={index} image={item.image} name={item.name} />
        ))}
        </div> 
        <Section/>
      
    </div>

    // <Footer /> // Uncomment this line if you want to use the Footer component
  )
}

export default App
