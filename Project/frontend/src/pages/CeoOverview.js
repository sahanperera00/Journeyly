import "../styles/sahan/CeoOverview.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import axios from "axios";
import ReactPaginate from "react-paginate";

const PER_PAGE = 5;

function CeoOverview() {
  var { type } = useParams();
  var topicType = "topic";
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  var col1 = null;
  var col2 = null;
  var col3 = null;
  var col4 = null;
  var col5 = null;
  var col6 = null;

  var col1hid = null;
  var col2hid = null;
  var col3hid = null;
  var col4hid = null;
  var col5hid = null;
  var col6hid = null;

  var cold1 = null;
  var cold2 = null;
  var cold3 = null;
  var cold4 = null;
  var cold5 = null;
  var cold6 = null;

  var cold1hid = null;
  var cold2hid = null;
  var cold3hid = null;
  var cold4hid = null;
  var cold5hid = null;
  var cold6hid = null;

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const DownloadReportPDF = () => {
    const pdf = new jsPDF("landscape", "px", "A2", false);
    //const pdf = new jsPDF("p","pt","A3");
    const data = document.querySelector("#pdfcontent");
    pdf.html(data).then(() => {
      for (let i = 0; i < 11; i++) {
        var pageCount = pdf.getNumberOfPages();
        console.log(pageCount);
        pdf.deletePage(pageCount);
      }

      pdf.save("Report.pdf");
    });
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = array
    .filter((data) => {
      switch (type) {
        case "flight":
          if (searchTerm == "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.startAirport.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.destinationAirport
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.arrivalTime.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.departureTime.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          break;
        case "hotel":
          if (searchTerm == "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.price
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.stars
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          break;
        case "destination":
          if (searchTerm == "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          break;
        case "package":
          if (searchTerm == "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.price
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.hotel.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.destination.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          break;
        case "taxi":
          if (searchTerm == "") {
            return data;
          } else if (
            data.driverName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          break;
        case "user":
          if (searchTerm == "") {
            return data;
          } else if (
            data.firstName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.lastName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          } else if (
            data.email.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
          break;
      }
    })
    .slice(offset, offset + PER_PAGE)
    .map((data) => {
      SetData(data);
      return (
        <tr>
          <td style={{ display: cold1hid }}>{cold1}</td>
          <td style={{ display: cold2hid }}>{cold2}</td>
          <td style={{ display: cold3hid }}>{cold3}</td>
          <td style={{ display: cold4hid }}>{cold4}</td>
          <td style={{ display: cold5hid }}>{cold5}</td>
          <td style={{ display: cold6hid }}>{cold6}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(array.length / PER_PAGE);

  function getArray() {
    setCurrentPage(0);
    switch (type) {
      case "flight":
        axios
          .get("http://localhost:8070/flights")
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "hotel":
        axios
          .get("http://localhost:8070/hotels")
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "destination":
        axios
          .get("http://localhost:8070/destination")
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "taxi":
        axios
          .get("http://localhost:8070/vehicles")
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "package":
        axios
          .get("http://localhost:8070/packages")
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "user":
        axios
          .get("http://localhost:8070/client")
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
    }
  }

  function SetData(props) {
    switch (type) {
      case "flight":
        cold1 = props.name;
        cold2 = props.startAirport;
        cold3 = props.destinationAirport;
        cold4 = props.arrivalTime;
        cold5 = props.departureTime;
        cold6 = props.airline;
        break;
      case "hotel":
        cold1 = props.name;
        cold2 = props.stars;
        cold3 = props.sellingPrice;
        cold4 = props.buyingPrice;
        cold5hid = "none";
        cold6hid = "none";
        break;
      case "destination":
        cold1 = props.name;
        cold2 = props.childTicketBuyingRate;
        cold3 = props.childTicketSellingRate;
        cold4 = props.adultTicketBuyingRate;
        cold5 = props.adultTicketSellingRate;
        cold6hid = "none";
        break;
      case "taxi":
        cold1 = props.driverName;
        cold2 = props.ownerName;
        cold3 = props.vehicleType;
        cold4 = props.fee;
        cold5hid = "none";
        cold6hid = "none";
        break;
      case "package":
        cold1 = props.name;
        cold2 = props.destination;
        cold3 = props.members;
        cold4 = props.hotel;
        cold5 = props.price;
        cold6hid = "none";
        cold6hid = "none";
        break;
      case "user":
        cold1 = props.firstName;
        cold2 = props.lastName;
        cold3 = props.email;
        cold4 = props.contactNo;
        cold5hid = "none";
        cold6hid = "none";
        break;
      default:
        break;
    }
    console.log(cold1);
  }

  switch (type) {
    case "flight":
      topicType = "Flights";
      col1 = "Name";
      col2 = "Start";
      col3 = "Destination";
      col4 = "Arrival Time";
      col5 = "Departure Time";
      col6 = "Airline";
      break;
    case "hotel":
      topicType = "Hotels";
      col1 = "Name";
      col2 = "Star";
      col3 = "Selling Price";
      col4 = "Buying Price";
      col5hid = "none";
      col6hid = "none";
      break;
    case "destination":
      topicType = "Destinations";
      col1 = "Name";
      col2 = "Child (Buying)";
      col3 = "Child (Selling)";
      col4 = "Adult (Buying)";
      col5 = "Adult (Selling)";
      col6hid = "none";
      break;
    case "taxi":
      topicType = "Taxis";
      col1 = "Driver's Name";
      col2 = "Owner's Name";
      col3 = "Type";
      col4 = "Fee";
      col5hid = "None";
      col6hid = "none";
      break;
    case "package":
      topicType = "Packages";
      col1 = "Name";
      col2 = "destination";
      col3 = "members";
      col4 = "Hotel";
      col5 = "Price";
      cold6hid = "none";
      break;
    case "user":
      topicType = "Users";
      col1 = "First Name";
      col2 = "Last Name";
      col3 = "Email";
      col4 = "Contact Number";
      col5hid = "none";
      col6hid = "none";
      break;
  }

  useEffect(() => {
    getArray();
  }, [type]);
  // useEffect(() => { CeoOverview() }, [type]);

  return (
    <div className="CeoDashOverviewMainCont">
      <h1>{topicType} Overview</h1>
      <div className="CeoDashSearch">
        <input
          className="ceoSearchbar"
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="CeoDashOverviewInnerCont">
        <div className="CeoDashOverviewInnerContC1">
          <div className="ceoOverviewTableCont">
            <table className="table table-striped" id="pdfcontent">
              <thead>
                <tr>
                  <th scope="col" style={{ display: col1hid }}>
                    {col1}
                  </th>
                  <th scope="col" style={{ display: col2hid }}>
                    {col2}
                  </th>
                  <th scope="col" style={{ display: col3hid }}>
                    {col3}
                  </th>
                  <th scope="col" style={{ display: col4hid }}>
                    {col4}
                  </th>
                  <th scope="col" style={{ display: col5hid }}>
                    {col5}
                  </th>
                  <th scope="col" style={{ display: col6hid }}>
                    {col6}
                  </th>
                </tr>
              </thead>
              <tbody>{currentPageData}</tbody>
            </table>
          </div>
          <div className="ceoOverviewBottomCont">
            <ReactPaginate
              previousLabel={
                <span
                  style={{ fontSize: "16px" }}
                  className="material-symbols-outlined"
                >
                  navigate_before
                </span>
              }
              nextLabel={
                <span
                  style={{ fontSize: "16px" }}
                  className="material-symbols-outlined"
                >
                  navigate_next
                </span>
              }
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
            <button className="ceoOverviewprintBtn" onClick={DownloadReportPDF}>
              Print
            </button>
          </div>
        </div>
        <div className="CeoDashOverviewInnerContC2">
          <div className="CeoDashOverviewInnerContC2Card1">
            <h1>{array.length}</h1>
            <h4>Number of {topicType}</h4>
          </div>
          <div className="CeoDashOverviewInnerContC2Card2">
            <img
              className="imgoverview"
              src={
                "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2Fart1.png?alt=media&token=489fc79f-12cb-4b70-8da6-0160ea7d60cf"
              }
              alt="img1"
            />
            <img
              className="imgoverviewlogo"
              src={
                "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-color.webp?alt=media&token=46432dde-c8e0-43e9-bc91-77b8a98e3f76"
              }
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CeoOverview;
