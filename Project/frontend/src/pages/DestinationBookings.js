import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/sahan/DestinationBookings.css';

function DestinationBookings() {
  const [ bookings, setBookings ] = useState([]);

  const { id } = useParams();

  const getBookings = async () => {
    await axios.get("http://localhost:8070/desTicket/user/"+id)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deleteBooking = (bid) => {
    axios.delete(`http://localhost:8070/desTicket/delete/${bid}`)
        .then((res) => {
            getBookings();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getBookings() }, [id]);

  return (
    <div className='desBookCont'>
      <div className='desBookTableCont'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">DesId</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Adults</th>
              <th scope="col">Children</th>
              <th scope="col">Total</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((data) => {
              return (
                <tr>
                  <td>{data.desId}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.adults}</td>
                  <td>{data.children}</td>
                  <td>{data.total}</td>
                  <td><button className='bookingbttn'><span className="material-symbols-outlined">Edit</span></button></td>
                  <td><button className='bookingbttn' onClick={() => deleteBooking(data._id)}>
                    <span className="material-symbols-outlined">Delete</span>
                  </button></td>
                </tr>
              )})
            }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default DestinationBookings