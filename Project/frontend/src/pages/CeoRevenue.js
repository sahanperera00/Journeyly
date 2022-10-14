import '../styles/sahan/CeoRevenue.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    // Title,
    // Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

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
    //   title: {
    //     display: true,
    //     text: 'Chart.js Line Chart',
    //   },
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
  return (
    // <Line data={data} options={options}/>
    <div className='CeoRevenueMainCont'>
        <h1>Revenue</h1>
        <div className='CeoRevenueInnerCont'>
            <div className='CeoRevenueInnerContR1'>
                <div className='CeoRevInConR1card'>
                    <h4>Total Revenue</h4>
                </div>
                <div className='CeoRevInConR1card'>
                    <h4>Revenue from Flights</h4>
                </div>
                <div className='CeoRevInConR1card'>
                    <h4>Revenue from Hotels</h4>
                </div>
                <div className='CeoRevInConR1card'>
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