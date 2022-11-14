import '../styles/sahan/FinanceDashboard.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function FinanceDashboard() {
    const [flights, setFlights] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [packages, setPackages] = useState([]);
    const [clients, setClients] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [invoice, setInvoice] = useState([]);
    var countFlight = 0;
    var countHotel = 0;
    var countDestination = 0 ;
    var countPackage = 0;
    var countVehicle = 0;


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

            axios.get('http://localhost:8070/invoice')
            .then((response) => {
                setInvoice(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => { setStates() }, []);

    // const [flightCount, setFlightCount] = useState(0);
    // const [hotelCount, setHotelCount] = useState(0);
    // const [destinationCount, setDestinationCount] = useState(0);
    // const [vehicleCount, setVehicleCount] = useState(0);
    // var flightCount1 = 0;
    // setFlightCount(flightCount1);
    

    return (
        <div className="FinanceDashMainCont">
            <h1>Dashboard</h1>
            <div className='FinanceDasInnerCont'>
                <div className='FinanceInConR1'>

                    <div className='FinanceInConR1card'>
                        <div className='FinanceInConR1cardData'>
                        {flights.map((data) => {
                                        if(data.economyClass == null) {
                                            countFlight++;
                                        }
                                    })}
                            <h1>{countFlight}</h1>
                            <h4>Pending Flights</h4>
                        </div>
                        <div className='FinanceFlightTable'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Flight Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {flights.map((data) => {
                                        if(data.economyClass == null) {    
                                            return (
                                                <tr>
                                                    <td className='setWidth concat' >{data.name}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='FinanceInConR1card'>
                        <div className='FinanceInConR1cardData'>
                        {hotels.map((data) => {
                                        if(data.sellingPrice == null) {
                                            countHotel++;
                                        }
                                    })}
                            <h1>{countHotel}</h1>
                            <h4>Pending Hotels</h4>
                        </div>
                        <div className='FinanceFlightTable'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Hotel Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hotels.map((data) => {
                                        if(data.sellingPrice == null) {
                                            return (
                                                <tr>
                                                    <td className='setWidth concat' >{data.name}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='FinanceInConR2'>

                    <div className='FinanceInConR2card'>
                        <div className='FinanceInConR1cardData'>
                        {destinations.map((data) => {
                                        if(data.adultTicketSellingRate == null) {
                                           countDestination++;
                                        }
                                    })}
                            <h1>{countDestination}</h1>
                            <h4>Pending Destinations</h4>
                        </div>
                        <div className='FinanceFlightTable'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Destination Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {destinations.map((data) => {
                                        if(data.adultTicketSellingRate == null) {
                                            return (
                                                <tr>
                                                    <td className='setWidth concat' >{data.name}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='FinanceInConR2card'>
                        <div className='FinanceInConR1cardData'>
                        {vehicles.map((data) => {
                                        if(data.fee == null)
                                        countVehicle++;
                                    })}
                            <h1>{countVehicle}</h1>
                            <h4>Pending Vehicles</h4>
                        </div>
                        <div className='FinanceFlightTable'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Owner's Name</th>
                                        <th>Driver's Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map((data) => {
                                        if(data.fee == null) {
                                            return (
                                                <tr>
                                                    <td className='setWidth concat' >{data.ownerName}</td>
                                                    <td className='setWidth concat' >{data.driverName}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceDashboard