import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/sahan/DesResUpdateForm.css";

function DesResUpdateForm() {
  const [destination, setDestination] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [childTicketSellingRate, setChildTicketSellingRate] = useState("");
  const [adultTicketSellingRate, setAdultTicketSellingRate] = useState("");

  const { desId } = useParams();
  const { id } = useParams();
  const { desResId } = useParams();
  const navigate = useNavigate();

  const getReservation = () => {
    axios
      .get("http://localhost:8070/desTicket/" + desResId)
      .then((res) => {
        setDestination(res.data.desName);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPhoneNo(res.data.phoneNo);

        const date = new Date(res.data.date);
        setDate(date.toISOString().split("T")[0]);
        setTime(res.data.time);
        setAdults(res.data.adults);
        setChildren(res.data.children);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getDestination = () => {
    axios
      .get("http://localhost:8070/destination/" + desId)
      .then((res) => {
        setChildTicketSellingRate(res.data.childTicketSellingRate);
        setAdultTicketSellingRate(res.data.adultTicketSellingRate);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getReservation();
  }, []);
  useEffect(() => {
    getDestination();
  }, []);

  return (
    <div className="DesResUpdateFormMainCont">
      <h1>Update Ticket Details</h1>
      <div className="DesResUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const newTicket = {
              firstName,
              lastName,
              email,
              phoneNo,
              date,
              time,
              adults,
              children,
              total:
                adultTicketSellingRate * adults +
                childTicketSellingRate * children,
            };

            axios
              .put(
                `http://localhost:8070/desTicket/update/${desResId}`,
                newTicket
              )
              .then(() => {
                alert("Ticket updated successfully");
                navigate(`/clientDashboard/${id}/bookings/destination`);
              })
              .catch((err) => {
                alert("Error adding ticket");
                console.log(err);
              });
          }}
        >
          <div className="form-group">
            <label className="form-label">Destination</label>
            <input
              type="text"
              className="form-control"
              value={destination}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              pattern="[a-z,A-Z]{3,}"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              pattern="[a-z,A-Z]{3,}"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              pattern="[._a-z0-9]+@+[a-z]+.com"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              defaultValue={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Time</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Number of Adults</label>
            <input
              type="Number"
              className="form-control"
              value={adults}
              onChange={(e) => {
                setAdults(e.target.value);
              }}
              min={0}
              max={10}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Number of Children</label>
            <input
              type="Number"
              className="form-control"
              value={children}
              onChange={(e) => {
                setChildren(e.target.value);
              }}
              min={0}
              max={10}
              required
            />
          </div>
          <br />
          <button type="submit" className="submitbtn">
            Update
          </button>
        </form>
      </div>
      <br />
    </div>
  );
}

export default DesResUpdateForm;
