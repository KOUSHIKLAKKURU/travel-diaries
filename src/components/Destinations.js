import React from 'react'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import trainimg from './images/trainimg.jpg'
import bus from './images/bus.jpg'
import ha from './images/ha.jpeg'
const Destinations = () => {
  return (
    <section className='destinations'>
      <h3><u>Our Services</u></h3>
      <div className='grid'>
        <div className='rail'>
          <img src={trainimg} alt='destination-1' />
          <h3>Railway Booking</h3>
          <p>
            Book your railway🚉tickets at affordadle prices 
          </p>
          <p><b><l>"HURRY UP!!!"</l></b></p>
        </div>

        <div className='bus'>
          <img src={bus} alt='destination-2' />
          <h3>Bus Booking</h3>
          <p>
            B-BEST
          </p>
          <p>U-UNBELIEVABLE</p>
          <p>S-SALE</p>
          <p><l><b>ON BUS🚍TICKETS HURRY NOW!!!</b></l></p>
        </div>

        <div className='flight'>
          <img src={pic3} alt='destination-3' />
          <h3>Flight Booking</h3>
          <p>
            When you book your flight tickets on travel✈️diaries you will feel more lighter...
          </p>
          <p><l><b>BOOK NOW!!!!</b></l></p>
        </div>
        <div>
       <img src={ha} alt='hotels' />
      <h3>Hotels&Lodges</h3>
    <p> The best hotels and lodges at affordadle cost</p>
    <p><l><b>BOOK NOW</b></l></p>
    </div>
      </div>
    </section>
  )
}

export default Destinations