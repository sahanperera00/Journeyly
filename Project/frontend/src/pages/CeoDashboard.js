import '../styles/sahan/CeoDashboard.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function CeoDashboard() {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [packages, setPackages] = useState([]);
  const [clients, setClients] = useState([]);
  const [destinations, setDestinations] = useState([]);

  function setStates() {
    axios.get('http://localhost:8070/flights')
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:8070/hotels')
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:8070/vehicles')
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:8070/destination')
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:8070/packages')
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:8070/client')
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => { setStates() }, []);

  return (
    <div className="CeoDashMainCont">
      <h1>Dashboard</h1>
      <div className='CeoDasInnerCont'>
        <div className='CeoInConR1'>
          <div className='CeoInConR1card'>
            <img className='imgdashimg1' src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart2.png?alt=media&token=ec73bf79-13cd-40e3-be20-8cbd383c8ad0'} alt='img1' />
            <div className='CeoInConR1cardData'>
              <h4>Flights</h4>
              <h1>{flights.length}</h1>
            </div>
          </div>
          <div className='CeoInConR1card'>
            <img className='imgdashimg2' src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart5.png?alt=media&token=3119ac01-336e-4258-95b9-b7f260cb3dea'} alt='img1' />
            <div className='CeoInConR1cardData'>
              <h4>Hotels</h4>
              <h1>{hotels.length}</h1>
            </div>
          </div>
          <div className='CeoInConR1card'>
            <img className='imgdashimg3' src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart6.png?alt=media&token=a1238e92-f663-43a4-b821-dd280f1d4db8'} alt='img1' />
            <div className='CeoInConR1cardData'>
              <h4>Destinations</h4>
              <h1>{destinations.length}</h1>
            </div>
          </div>
          <div className='CeoInConR1card'>
            <img className='imgdashimg4' src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart7.png?alt=media&token=9b3cfc11-4158-4104-b8f3-289b9334a6c2'} alt='img1' />
            <div className='CeoInConR1cardData'>
              <h4>Taxis</h4>
              <h1>{vehicles.length}</h1>
            </div>
          </div>
        </div>
        <div className='CeoInConR2'>
          <div className='CeoInConR2card'>
            <div className='CeoInConR1cardData1'>
              <h4 className='CeoInConR2cardT1'>Clients</h4>
              <h1>{clients.length}</h1>
            </div>
            <div className='CeoInConR1cardData2'>
              <img className='imgdashimg5' src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart3.png?alt=media&token=6ac6f396-39e2-432c-b3d1-7801c0f528fe'} alt='img1' />
            </div>
          </div>
          <div className='CeoInConR2card'>
            <div className='CeoInConR2cardData1'>
              <h4 className='CeoInConR2cardT2'>Packages</h4>
              <h1>{packages.length}</h1>
            </div>
            <div className='CeoInConR2cardData2'>
              <img className='imgdashimg6' src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart4.png?alt=media&token=291fc909-5724-429e-bbcf-3644ddaaec73'} alt='img1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoDashboard