import '../styles/sahan/EditorWebContent.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const PER_PAGE = 5;

function EditorWebContent() {
  var { type } = useParams();
  var topicType = 'topic';
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  var addbttn = null;

  var col1 = null;
  var col2 = null;
  var col3 = null;
  var col4 = null;
  var col5 = null;
  var col6 = null;
  var col7 = null;
  var col8 = null;
  var col9 = null;
  var col10 = null;
  var col11 = null;
  var col12 = null;

  var col1hid = null;
  var col2hid = null;
  var col3hid = null;
  var col4hid = null;
  var col5hid = null;
  var col6hid = null;
  var col7hid = null;
  var col8hid = null;
  var col9hid = null;
  var col10hid = null;
  var col11hid = null;
  var col12hid = null;

  var cold1 = null;
  var cold2 = null;
  var cold3 = null;
  var cold4 = null;
  var cold5 = null;
  var cold6 = null;
  var cold7 = null;
  var cold8 = null;
  var cold9 = null;
  var cold10 = null;
  var cold11 = null;
  var cold12 = null;

  var cold1hid = null;
  var cold2hid = null;
  var cold3hid = null;
  var cold4hid = null;
  var cold5hid = null;
  var cold6hid = null;
  var cold7hid = null;
  var cold8hid = null;
  var cold9hid = null;
  var cold10hid = null;
  var cold11hid = null;
  var cold12hid = null;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = array
    .filter((data) => {
      switch (type) {
        case 'flight':
          if (searchTerm == "") {
            return data;
          } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.startAirport.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.destinationAirport.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.arrivalTime.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.departureTime.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          }
          break;
        case 'hotel':
          if (searchTerm == "") {
            return data;
          } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.price.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.stars.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          }
          break;
        case 'destination':
          if (searchTerm == "") {
            return data;
          } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.location.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          }
          break;
        case 'package':
          if (searchTerm == "") {
            return data;
          } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.price.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.hotel.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.destination.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          }
          break;
        case 'taxi':
          if (searchTerm == "") {
            return data;
          } else if (data.driverName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.ownerName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } else if (data.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
          } 
          break;
      }
    })
    .slice(offset, offset + PER_PAGE)
    .map((data) => {
      SetData(data);
      return (
        <>
        <tr>
          <td className='setWidth concat' style={{ display: cold1hid }}>{cold1}</td>
          <td className='setWidth concat' style={{ display: cold2hid }}>{cold2}</td>
          <td className='setWidth concat' style={{ display: cold3hid }}>{cold3}</td>
          <td className='setWidth concat' style={{ display: cold4hid }}>{cold4}</td>
          <td className='setWidth concat' style={{ display: cold5hid }}>{cold5}</td>
          <td className='setWidth concat' style={{ display: cold6hid }}>{cold6}</td>
          <td className='setWidth concat' style={{ display: cold7hid }}>{cold7}</td>
          <td className='setWidth concat' style={{ display: cold8hid }}>{cold8}</td>
          <td className='setWidth concat' style={{ display: cold9hid }}>{cold9}</td>
          <td className='setWidth concat' style={{ display: cold10hid }}>{cold10}</td>
          <td className='setWidth concat' style={{ display: cold11hid }}>{cold11}</td>
          <td className='setWidth concat' style={{ display: cold12hid }}>{cold12}</td>
        </tr>
          </>
      )
    });

  const pageCount = Math.ceil(array.length / PER_PAGE);

  function getArray() {
    setCurrentPage(0);
    switch (type) {
      case 'flight':
        axios.get('http://localhost:8070/flights')
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'hotel':
        axios.get('http://localhost:8070/hotels')
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'destination':
        axios.get('http://localhost:8070/destination')
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'taxi':
        axios.get('http://localhost:8070/vehicles')
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'package':
        axios.get('http://localhost:8070/packages')
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
    }
  }

  function deleteBooking(bid) {
    switch (type) {
      case 'flight':
        axios.delete(`http://localhost:8070/flights/remove/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'hotel':
        axios.delete(`http://localhost:8070/hotels/remove/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'destination':
        axios.delete(`http://localhost:8070/destination/delete/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'taxi':
        axios.delete(`http://localhost:8070/vehicles/delete/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case 'package':
        axios.delete(`http://localhost:8070/packages/delete/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
    }
  }

  function SetData(props) {
    switch (type) {
      case 'flight':
        cold1 = props.flightId;
        cold2 = props.name;
        cold3 = props.startAirport
        cold4 = props.destinationAirport;
        cold5 = props.arrivalDate;
        cold6 = props.departureDate;
        cold7 = props.arrivalTime;
        cold8 = props.departureTime;
        cold9 = props.airline;
        cold10hid = 'none';
        cold11 = <Link className='updatebttn' to={"/editorDashboard/flightUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
        cold12 = <button className='deletebttn' onClick={() => {if (window.confirm('Do you really want to delete these record? This process cannot be undone.')) deleteBooking(props._id) }}><span className="material-symbols-outlined">delete</span></button>;
        addbttn = <Link to={'/editorDashboard/flightForm'}><button className='editorOverviewprintBtn'>Add</button></Link>
        break;
      case 'hotel':
        cold1 = props.name;
        cold2 = props.description;
        cold3 = props.stars;
        cold4 = props.facilities;
        cold5 = props.location;
        cold6hid = props.price;
        cold7hid = 'none';
        cold8hid = 'none';
        cold9hid = 'none';
        cold10hid = 'none';
        cold11 = <Link className='updatebttn' to={"/editorDashboard/hotelUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
        cold12 = <button className='deletebttn' onClick={() => deleteBooking(props._id)}><span className="material-symbols-outlined">delete</span></button>;
        addbttn = <Link to={'/editorDashboard/hotelForm'}><button className='editorOverviewprintBtn'>Add</button></Link>
        break;
      case 'destination':
        cold1 = props.name;
        cold2 = props.shortDesc;
        cold3 = props.longDesc;
        cold4 = props.location;
        cold5hid = 'none';
        cold6hid = 'none';
        cold7hid = 'none';
        cold8hid = 'none';
        cold9hid = 'none';
        cold10hid = 'none';
        cold11 = <Link className='updatebttn' to={"/editorDashboard/destinationUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
        cold12 = <button className='deletebttn' onClick={() => {if (window.confirm('Do you really want to delete these record? This process cannot be undone.')) deleteBooking(props._id) }}><span className="material-symbols-outlined">delete</span></button>;
        addbttn = <Link to={'/editorDashboard/destinationForm'}><button className='editorOverviewprintBtn'>Add</button></Link>
        break;
      case 'taxi':
        cold1 = props.driverName;
        cold2 = props.ownerName;
        cold3 = props.email;
        cold4 = props.type;
        cold5 = props.vehicleType;
        cold6 = props.phoneNo;
        cold7 = props.fee;
        cold8hid = 'none';
        cold9hid = 'none';
        cold10hid = 'none';
        cold11 = <Link className='updatebttn' to={"/editorDashboard/vehicleUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
        cold12 = <button className='deletebttn' onClick={() => {if (window.confirm('Do you really want to delete these record? This process cannot be undone.')) deleteBooking(props._id) }}><span className="material-symbols-outlined">delete</span></button>;
        addbttn = <Link to={'/editorDashboard/vehicleForm'}><button className='editorOverviewprintBtn'>Add</button></Link>
        break;
      case 'package':
        cold1 = props.name;
        cold2 = props.members;
        cold3 = props.hotel;
        cold4 = props.destination;
        cold5 = props.vehicle;
        cold6 = props.roomType;
        cold7 = props.guide;
        cold8 = props.price;
        cold9hid = 'none';
        cold10hid = 'none';
     

        cold11 = <Link className='updatebttn' to={"/editorDashboard/packageUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
        cold12 = <button className='deletebttn' onClick={() => {if (window.confirm('Do you really want to delete these record? This process cannot be undone.')) deleteBooking(props._id) }}><span className="material-symbols-outlined">delete</span></button>;
        addbttn = <Link to={'/editorDashboard/packageForm'}><button className='editorOverviewprintBtn'>Add</button></Link>
        break;
    }
  }

  switch (type) {
    case ('flight'):
      topicType = 'Flights';
      col1 = 'Id';
      col2 = 'Name';
      col3 = 'From';
      col4 = 'To';
      col5 = 'Arrival Date';
      col6 = 'Departure Date';
      col7 = 'Arrival Time';
      col8 = 'Departure Time';
      col9 = 'Airline';
      col10hid = 'none';
      col11 = 'Update';
      col12 = 'Delete';
      break;
    case ('hotel'):
      topicType = 'Hotels';
      col1 = 'Name';
      col2 = 'Description';
      col3 = 'Stars';
      col4 = 'Facilities';
      col5 = 'Location';
      col6hid = 'Price';
      col7hid = 'none';
      col8hid = 'none';
      col9hid = 'none';
      col10hid = 'none';
      col11 = 'Update';
      col12 = 'Delete';
      break;
    case ('destination'):
      topicType = 'Destinations';
      col1 = 'Name';
      col2 = 'Short Description';
      col3 = 'Long Description';
      col4 = 'Location';
      col5hid = 'none';
      col6hid = 'none';
      col7hid = 'none';
      col8hid = 'none';
      col9hid = 'none';
      col10hid = 'none';
      col11 = 'Update';
      col12 = 'Delete';
      break;
    case ('taxi'):
      topicType = 'Taxis';
      col1 = "Driver";
      col2 = 'Owner';
      col3 = 'Email';
      col4 = 'Type';
      col5 = 'Vehicle Type';
      col6 = 'Phone Number';
      col7 = 'Fee';
      col8hid = 'none';
      col9hid = 'none';
      col10hid = 'none';
      col11 = 'Update';
      col12 = 'Delete';
      break;
    case ('package'):
      topicType = 'Packages';
      col1 = 'Name';
      col2 = 'Members';
      col3 = 'Hotel';
      col4 = 'Destination';
      col5 = 'Vehicle';
      col6 = 'Room Type';
      col7 = 'Guide';
      col8 = 'Price';
      col9hid = 'none';
      col10hid = 'none';
      col11 = 'Update';
      col12 = 'Delete';
      break;
  }

  useEffect(() => { getArray() }, [type]);

  return (
    <div className='EditorDashOverviewMainCont'>
      <h1>{topicType} - Web Content</h1>
      <div className='EditorDashSearch'>
        <input className='editorSearchbar' type='text' placeholder='Search here' onChange={(e) => { setSearchTerm(e.target.value) }} />
      </div>
      <div className='EditorDashOverviewInnerCont'>
        <div className='EditorDashOverviewInnerContC1'>
          <div className='editorOverviewTableCont'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col" className='col-sm-2' style={{ display: col1hid }}>{col1}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col2hid }}>{col2}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col3hid }}>{col3}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col4hid }}>{col4}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col5hid }}>{col5}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col6hid }}>{col6}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col7hid }}>{col7}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col8hid }}>{col8}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col9hid }}>{col9}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col10hid }}>{col10}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col11hid }}>{col11}</th>
                  <th scope="col" className='col-sm-2' style={{ display: col12hid }}>{col12}</th>
                </tr>
              </thead>
              <tbody>
                {currentPageData}
              </tbody>
            </table>
          </div>
          <div className='editorOverviewBottomCont'>
            <ReactPaginate
              previousLabel={<span style={{ fontSize: '16px' }} className="material-symbols-outlined">navigate_before</span>}
              nextLabel={<span style={{ fontSize: '16px' }} className="material-symbols-outlined">navigate_next</span>}
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
            {addbttn}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorWebContent