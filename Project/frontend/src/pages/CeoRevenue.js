import "../styles/sahan/CeoRevenue.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function FlightChartData(month) {
  const [flights, setFlights] = useState([]);

  const [vehicles, setVehicles] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const [departureDate, setDepartureDate] = useState("");

  function getFlights() {
    axios
      .get("http://localhost:8070/flightTicket")
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getFlights();
  }, []);

  var count = 0;
  flights.filter((data) => {
    switch (month) {
      case "september":
        if (data.departureDate.includes("2022-09")) {
          count++;
        }
        break;
      case "october":
        if (data.departureDate.includes("2022-10")) {
          count++;
        }
        break;
      case "november":
        if (data.departureDate.includes("2022-11")) {
          count++;
        }
        break;
      case "december":
        if (data.departureDate.includes("2022-12")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

function HotelChartData(month) {
  const [hotels, setHotels] = useState([]);

  function getHotels() {
    axios
      .get("http://localhost:8070/hotelRes")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getHotels();
  }, []);

  var count = 0;
  hotels.filter((data) => {
    switch (month) {
      case "september":
        if (data.check_in.includes("2022-09")) {
          count++;
        }
        break;
      case "october":
        if (data.check_in.includes("2022-10")) {
          count++;
        }
        break;
      case "november":
        if (data.check_in.includes("2022-11")) {
          count++;
        }
        break;
      case "december":
        if (data.check_in.includes("2022-12")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

function VehiclesChartData(month) {
  const [vehicles, setVehicles] = useState([]);

  function getVehicles() {
    axios
      .get("http://localhost:8070/rental")
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getVehicles();
  }, []);

  var count = 0;
  vehicles.filter((data) => {
    switch (month) {
      case "september":
        if (data.date.includes("2022-09")) {
          count++;
        }
        break;
      case "october":
        if (data.date.includes("2022-10")) {
          count++;
        }
        break;
      case "november":
        if (data.date.includes("2022-11")) {
          count++;
        }
        break;
      case "december":
        if (data.date.includes("2022-12")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

function DesChartData(month) {
  const [destinations, setDestinations] = useState([]);

  function getDes() {
    axios
      .get("http://localhost:8070/desTicket")
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getDes();
  }, []);

  var count = 0;
  destinations.filter((data) => {
    switch (month) {
      case "september":
        if (data.date.includes("2022-09")) {
          count++;
        }
        break;
      case "october":
        if (data.date.includes("2022-10")) {
          count++;
        }
        break;
      case "november":
        if (data.date.includes("2022-11")) {
          count++;
        }
        break;
      case "december":
        if (data.date.includes("2022-12")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

export const options = {
  // responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Numbers",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
};

var september = "september";
var october = "october";
var november = "november";
var december = "december";

// export const data = {
//     labels: ['September', 'October', 'November', 'December'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [passMonth(september), passMonth(october), passMonth(november), passMonth(december)],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//     //   {
//     //     label: 'Dataset 2',
//     //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //     borderColor: 'rgb(53, 162, 235)',
//     //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     //   },
//     ],
// };

function CeoRevenue() {
  const [childTicketBuyingRate, setChildTicketBuyingRate] = useState(0);
  const [adultTicketBuyingRate, setAdultTicketBuyingRate] = useState(0);
  const [childTicketSellingRate, setChildTicketSellingRate] = useState(0);
  const [adultTicketSellingRate, setAdultTicketSellingRate] = useState(0);

  const [desRes, setDesRes] = useState([]);
  const [destinationRevenue, setDestinationRevenue] = useState(0);
  var totalDesRev = null;

  const [flightRes, setFlightRes] = useState([]);
  const [revFlight, setFlightRev] = useState(0);
  var totalFlightRev = null;

  const [hotelRes, setHotelRes] = useState([]);
  const [revHotel, setHotelRev] = useState(0);
  var totalHotelRev = null;

  useEffect(() => {
    getData();
  }, []);

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

    axios
      .get("http://localhost:8070/desTicket")
      .then((res) => {
        // setChildTicketBuyingRate(res.data[0].childTicketBuyingRate);
        // setAdultTicketBuyingRate(res.data[0].adultTicketBuyingRate);
        // setChildTicketSellingRate(res.data[0].childTicketSellingRate);
        // setAdultTicketSellingRate(res.data[0].adultTicketSellingRate);
        // console.log(res.data[0].childTicketBuyingRate);
        // setDestinationRevenue((adultTicketSellingRate - adultTicketBuyingRate) + (childTicketSellingRate - childTicketBuyingRate));

        setDesRes(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    setDestinationRevenue(totalDesRev);

    axios
      .get("http://localhost:8070/flightTicket")
      .then((res) => {
        setFlightRes(res.data);
        // setPrice(res.data[0].price);
        // setFlightRev(price*0.08);
      })
      .catch((err) => {
        alert(err);
      });
    setFlightRev(totalFlightRev);

    axios
      .get("http://localhost:8070/hotels")
      .then((res) => {
        setHotelRes(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    setHotelRev(totalHotelRev);
  };
  return (
    // <Line data={data} options={options}/>

    <div className="CeoRevenueMainCont">
      {desRes.map((data) => {
        totalDesRev = totalDesRev + data.total;
      })}
      {flightRes.map((data) => {
        totalFlightRev =
          Math.round((totalFlightRev + data.price * 0.08) * 100) / 100;
        // totalFlightRev = (totalFlightRev+data.price);
      })}

      {hotelRes.map((data) => {
        totalHotelRev = totalHotelRev + (data.sellingPrice - data.buyingPrice);
      })}
      <h1>Dashboard</h1>
      <div className="CeoRevenueInnerCont">
        <div className="CeoRevenueInnerContR1">
          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + (totalDesRev + totalFlightRev + totalHotelRev)}</h1>
            <h4>Total Revenue</h4>
          </div>

          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + totalFlightRev}</h1>
            <h4>Revenue from Flights</h4>
          </div>

          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + totalHotelRev}</h1>
            <h4>Revenue from Hotels</h4>
          </div>

          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + totalDesRev}</h1>
            <h4>Revenue from Destinations</h4>
          </div>
        </div>

        <div className="CeoRevenueInnerContR2">
          <div className="CeoRevenueInnerContR2C1">
            <Line
              data={{
                labels: ["September", "October", "November", "December"],
                datasets: [
                  {
                    label: "Number of Flights booked",
                    data: [
                      FlightChartData(september),
                      FlightChartData(october),
                      FlightChartData(november),
                      FlightChartData(december),
                    ],
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Number of Hotels reserved",
                    data: [
                      HotelChartData(september),
                      HotelChartData(october),
                      HotelChartData(november),
                      HotelChartData(december),
                    ],
                    borderColor: "rgb(0,0,255)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Number of Vehicles rented",
                    data: [
                      VehiclesChartData(september),
                      VehiclesChartData(october),
                      VehiclesChartData(november),
                      VehiclesChartData(december),
                    ],
                    borderColor: "rgb(124,252,0)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Number of Attraction tickets booked",
                    data: [
                      DesChartData(september),
                      DesChartData(october),
                      DesChartData(november),
                      DesChartData(december),
                    ],
                    borderColor: "rgb(234, 221, 202)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                ],
              }}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CeoRevenue;
