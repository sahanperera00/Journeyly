import '../styles/sahan/CeoRevenue.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

export const options = {
    // responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
        y: {
            beginAtZero: true,
        }
    },
    maintainAspectRatio: false,
};


export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1000, 2000, 1000, 3000, 2000, 3000, 500],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    //   {
    //     label: 'Dataset 2',
    //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //     borderColor: 'rgb(53, 162, 235)',
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    ],
};


function CeoRevenue() {
    const [childTicketBuyingRate, setChildTicketBuyingRate] = useState(0);
    const [adultTicketBuyingRate, setAdultTicketBuyingRate] = useState(0);
    const [childTicketSellingRate, setChildTicketSellingRate] = useState(0);
    const [adultTicketSellingRate, setAdultTicketSellingRate] = useState(0);
    const [destinationRevenue, setDestinationRevenue] = useState(0);

    const [flightRes, setFlightRes] = useState([]);
    const [revFlight, setFlightRev] = useState(0);
    var totalFlightRev = null;

    const [hotelRes,setHotelRes] = useState([]);
    const [revHotel,setHotelRev]=useState(0);
    var totalHotelRev = null;



    useEffect(() => { getData() }, []);
    
    
const getData = () => {
    // axios.get("http://localhost:8070/destination")
    //     .then((res) => {
    //         setChildTicketBuyingRate(res.data[0].childTicketBuyingRate);
    //         setAdultTicketBuyingRate(res.data[0].adultTicketBuyingRate);
    //         setChildTicketSellingRate(res.data[0].childTicketSellingRate);
    //         setAdultTicketSellingRate(res.data[0].adultTicketSellingRate);
    //         console.log(res.data[0].childTicketBuyingRate);
    //         setDestinationRevenue((adultTicketSellingRate - adultTicketBuyingRate) + (childTicketSellingRate - childTicketBuyingRate));
    //     })
    //     .catch((err) => {
    //         alert(err);
    //     });
        
    axios.get("http://localhost:8070/destination")
    .then((res) => {
        setChildTicketBuyingRate(res.data[0].childTicketBuyingRate);
        setAdultTicketBuyingRate(res.data[0].adultTicketBuyingRate);
        setChildTicketSellingRate(res.data[0].childTicketSellingRate);
        setAdultTicketSellingRate(res.data[0].adultTicketSellingRate);
        console.log(res.data[0].childTicketBuyingRate);
        setDestinationRevenue((adultTicketSellingRate - adultTicketBuyingRate) + (childTicketSellingRate - childTicketBuyingRate));
    })
    .catch((err) => {
        alert(err);
    });

    axios.get("http://localhost:8070/flightTicket")
    .then((res) => {
        setFlightRes(res.data);
        // setPrice(res.data[0].price);
        // setFlightRev(price*0.08);
    })
    .catch((err) => {
        alert(err);
    });
    setFlightRev(totalFlightRev);

    axios.get("http://localhost:8070/hotels")
    .then((res)=>{
        setHotelRes(res.data);
    })
    .catch((err)=>{
        alert(err);
    });
    setHotelRev(totalHotelRev);
}
  return (
    // <Line data={data} options={options}/>
    <div className='CeoRevenueMainCont'>
        <h1>Revenue</h1>
        <div className='CeoRevenueInnerCont'>
            <div className='CeoRevenueInnerContR1'>
                <div className='CeoRevInConR1card'>
                    <h4>Total Revenue</h4>
                </div>
                {
                flightRes.map((data) => {
                        totalFlightRev = Math.round((totalFlightRev + (data.price*0.08))*100)/100;          
                })}
                <div className='CeoRevInConR1card'>
                <h1>{totalFlightRev}</h1>
                    <h4>Revenue from Flights</h4>
                </div>
                {
                    hotelRes.map((data)=>{
                        totalHotelRev=(totalHotelRev+(data.sellingPrice-data.buyingPrice));
                    })
                }
                <div className='CeoRevInConR1card'>
                <h1>{totalHotelRev}</h1>
                    <h4>Revenue from Hotels</h4>
                </div>
                <div className='CeoRevInConR1card'>
                    <h1>{destinationRevenue}</h1>
                    <h4>Revenue from Destinations</h4>
                </div>
                <div className='CeoRevInConR1card'>
                    <h4>Revenue from Vehicles</h4>
                </div>
            </div>
            <div className='CeoRevenueInnerContR2'>
                <div className='CeoRevenueInnerContR2C1'>
                    <Line data={data} options={options}/>
                </div>
                <div className='CeoRevenueInnerContR2C1'>
                    <Line data={data} options={options}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CeoRevenue