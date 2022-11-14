import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/sudul/FlightTicketView.css';
import React from 'react';
import {jsPDF} from "jspdf";
// import ReactToPrint from 'react-to-print';

function FlightTicketView() {
    // const DownloadReportPDF = () =>{
    //     // const pdf = new jsPDF("landscape", "px", "A4",false);
    //     const pdf = new jsPDF("potrait","pt","A4");
    //      const data = document.querySelector("#pdfcontent");
    //      pdf.html(data).then(()=>{
             
             
    //         //  for (let i = 0; i < 11; i++) {
    //         //      var pageCount=pdf.getNumberOfPages();
    //         //      console.log(pageCount);
    //         //      pdf.deletePage(pageCount);
    //         //    }
             
    //          pdf.save("Report.pdf");
    //      })
    //  }

    const [flight, setFlight] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [airline, setAirline] = useState('');
    const [depDate, setDepDate] = useState('');
    const [depTime, setDepTime] = useState('');
    const [startAirport, setDepAir] = useState('');
    const [flightAirport, setFlightAir] = useState('');
    const [passportID, setppID] = useState('');
    const [email, setEmail] = useState('');
    const [classType, setClass] = useState('');
    const [price, setPrice] = useState('');
    const [business, setBusiness] = useState('');
    const [economy, setEconomy] = useState('');
    const [seat, setSeat] = useState('');
    const [gate, setGate] = useState('');

    

    const { id } = useParams();
    const { flightResId } = useParams();
    const navigate = useNavigate();

    const getReservation = () => {
        axios.get("http://localhost:8070/flightTicket/" + flightResId)
            .then((res) => {
                setFlight(res.data.flightName);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setPhoneNo(res.data.phoneNo);
                setppID(res.data.passportID);
                setEmail(res.data.email);
                setClass(res.data.classType);
                setEconomy(res.data.economyClass);
                setBusiness(res.data.businessClass);
                setAirline(res.data.airline);
                setPrice(res.data.price);
                setDepAir(res.data.startAirport);
                setFlightAir(res.data.destinationAirport);
                setDepDate(res.data.departureDate);
                setDepTime(res.data.departureTime);
                setSeat(res.data.seatNo);
                setGate(res.data.gate);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getReservation() }, []);


    return (
        <div className="FlightResViewFormMainCont">
            <h1>Ticket</h1>
            <div className='FlightResViewFormCont'>  
            <br/>
            
<div class="boxFlight" id='pdfcontent' >
  <ul class="leftFlight" >
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  
  <ul class="rightFlight" >
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="ticketFlight">
    <span class="airline">{airline}</span>
    <span class="airline airlineslip">{airline}</span>
    <span class="boardingFlight">{classType.toUpperCase()}</span>
    <div class="contentFlight">
      <span class="jfk">{startAirport.toUpperCase().slice(0,3)}</span>
      <span class="planeFlight"><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
      <span class="sfo">{flightAirport.toUpperCase().slice(0,3)}</span>
      
      <span class="jfk jfkslip">{startAirport.toUpperCase().slice(0,3)}</span>
      <span class="planeFlight planeslip"><svg clip-rule="evenodd" fill-rule="evenodd" height="50" width="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
      <span class="sfo sfoslip">{flightAirport.toUpperCase().slice(0,3)}</span>
      <div class="sub-contentFlight">
        <span class="watermarkFlight">{airline}</span>
        <span class="nameFlight">PASSENGER NAME<br/><span>{firstName} {lastName}</span></span>
        <span class="flightFlight">FLIGHT N&deg;<br/><span>{flight}</span></span>
        <span class="gateFlight">GATE<br/><span>{gate}</span></span>
        <span class="seatFlight">SEAT<br/><span>{seat}</span></span>
        <span class="boardingtime">BOARDING TIME<br/><span>{depTime} ON {depDate}</span></span>

         <span class="flightFlight flightslip">FLIGHT N&deg;<br/><span>{flight}</span></span>
          <span class="seatFlight seatslip">SEAT<br/><span>{seat}</span></span>
          <span class="classFlight classslip">CLASS<br/><span>{classType.toUpperCase().slice(0,1)}</span></span>
         <span class="nameFlight nameslip">PASSENGER NAME<br/><span>{firstName.slice(0,1)}. {lastName}</span></span>
      </div>
    </div>
    <div class="barcodeFlight"></div>
    <div class="barcodeFlight slip"></div>
  </div>
</div>
{/* <button class='flightViewprintBtn' id='printBTN' onClick={window.print}>Print</button> */}

            </div><br />
        </div>
    )
}

export default FlightTicketView;