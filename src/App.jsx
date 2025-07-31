import React, { useState, useEffect } from 'react'
import Header from './components/header.jsx'
import HeroSection from './components/HeroSection.jsx'
import Card from './components/Card.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx' 
import Login from './components/login.jsx'  
import Timer from './components/timer.jsx'
import axios from 'axios'
import Form from './components/form.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/HeroAI.jsx'
import Dashbord from './components/Dashbord.jsx'
 
function App() {
  // const data = [
  //   {image:"https://img.icons8.com/emoji/48/blueberries.png", 
  //     name:"abcd"
  //   },
  //     {image:"src/assets/logo.png",
  //     name:"abhinav",
  //   },
  // ]
  const [data, setData] = useState([])
  const getdata = async () => {
     axios.get("https://picsum.photos/v2/list?page=2&limit=30")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    getdata();  
  }, [])
 
  return (
    
    <div>
      <Navbar />
      <Hero />
       <Dashbord />
      
      {/* <Header />
      <HeroSection /> */}
      <Timer />
      <Login/>
      <Form />
      
      <div className='flex flex-wrap justify-center gap-4 p-1 bg-violet-100 overflow-auto '>
        {data.map((item, index) => (
          // <Card key={index} image={item.image} name={item.name} />
          <Card 
            key={index} 
            image={item.download_url} 
            // title={item.title} 
            // price={item.price}
            // rating={item.rating.rate}
            // ratingCount={item.rating.count}
            
            // description={` ${item.category}`} 
            category="" />
        ))}
        </div> 

        <Footer />
        <Section/>
      
    </div>

    // <Footer /> // Uncomment this line if you want to use the Footer component
  )
}

export default App
