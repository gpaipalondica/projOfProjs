import React from 'react'
import Multiple from "../../assets/pizza/multiplePizzas.jpeg"
import '../../styles/pizzaCss/PizzaAbout.css'
import PizzaNav from './PizzaNav';

function About() {
  return (<>
  <PizzaNav/>
    <div className='pizza-about'>
        <div className='aboutTop' style={{backgroundImage: `url(${Multiple})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Welcome to our slice of heaven! At GP's Pizzeria, we are not just another pizza joint; we are purveyors of an unforgettable experience. From the moment our ovens are fired up to the last delicious bite, every step of our pizza-making process is infused with passion and dedication. <br/><br/> Behind every delicious slice, there's a dedicated team with a shared passion for pizza. Our team is a diverse blend of culinary experts, pizza enthusiasts, and customer service champions. Together, we work tirelessly to create a warm and inviting atmosphere, making your pizza experience one to cherish.<br/><br/>When you order from GP's Pizzeria, you can expect nothing less than perfection. We promise to delight your taste buds, exceed your expectations, and leave you with a lingering smile. Our dedication to quality, innovation, and customer satisfaction drives us to continually raise the bar in the world of pizza.</p>
        </div>
    </div>
  </>
  )
}

export default About