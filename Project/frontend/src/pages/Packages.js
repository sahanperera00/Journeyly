import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/sudul/flight.css";
import NavbarDark from "../components/NavbarDark";
// import NavbarDark from "../components/NavbarDark";
// import "../styles/praweena/Packages.css";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { id } = useParams();

  const getPackages = () => {
    axios
      .get("http://localhost:8070/packages")
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <div className="flightMainContainer">
      <NavbarDark />
      <div className="flightInnerContainer">
        <h1 className="flightHeader">Packages</h1>
        <div className="flightContainer">
          <div className="flightSearch">
            Location
            <br />
            <br />
            <input
              className="flightSearchInput"
              type="text"
              placeholder="Search by location"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <hr />
          </div>
          <div className="flightBodyContainer">
            {packages
              .filter((data) => {
                if (data.price != null) {
                  if (searchTerm == "") {
                    return data;
                  } else if (
                    data.destination
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  }
                }
              })
              .map((data) => {
                return (
                  <Link to={"/PackagePreview/" + data._id}>
                    <div className="flightCardContainer">
                      <div className="flightImageContainer">
                        <img
                          className="flightCardImg"
                          alt="pic"
                          src={data.image}
                        />
                      </div>
                      <div className="flightTextContainer">
                        <div className="row">
                          <div className="col-7">
                            <h4 className="taxititlesec">
                              {data.name}{" "}
                              <span
                                style={{
                                  fontWeight: "normal",
                                  fontSize: "14px",
                                }}
                              >
                                {data.destination}
                              </span>
                            </h4>
                          </div>
                          <div className="col-12">{data.hotel}</div>
                          <div className="col-6">
                            <h7>
                              <span class="material-symbols-outlined">
                                group
                              </span>
                              {"  "}
                              {data.members}
                            </h7>
                          </div>
                          <div className="col-6">
                            <h7>
                              <span class="material-symbols-outlined">bed</span>
                              {"  "}
                              {data.roomType}
                            </h7>
                          </div>
                          <br />
                          <br />
                          <div className="col-12" style={{ textAlign: "end" }}>
                            <h7>Price</h7>
                          </div>
                        </div>
                        {/* <br /> */}
                        <div className="row">
                          <div
                            className="col-6"
                            style={{ textAlign: "end" }}
                          ></div>

                          <div className="col-6" style={{ textAlign: "end" }}>
                            <h5>
                              <b>Rs {data.price}.00</b>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;

// import { useNavigate } from "react-router-dom";

// function Packages() {
//   const [packages, setPackages] = useState([]);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const getPackages = () => {
//     axios
//       .get("http://localhost:8070/packages")
//       .then((res) => {
//         setPackages(res.data);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   useEffect(() => {
//     getPackages();
//   }, []); //Shows changes of the page

//   return (
//     <div className="packageMain">
//       <NavbarDark />
//       <h1 className="packageHeader">
//         Packages
//         <h2 className="PackageDiscription">
//           Enjoy WonderFul Experience in Sri Lanka
//           <br />
//           Plan Your Trip With Us{" "}
//         </h2>
//       </h1>

//       <div className="container d-flex flex-wrap" style={{ width: "80%" }}>
//         <input
//           className="packageSerach"
//           type="text"
//           placeholder="Search Your Destination here"
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//           }}
//         />

//         {packages
//           .filter((data) => {
//             if (data.price != null) {
//               if (searchTerm == "") {
//                 return data;
//               } else if (
//                 data.destination
//                   .toLowerCase()
//                   .includes(searchTerm.toLowerCase())
//               ) {
//                 return data;
//               } else if (
//                 data.name.toLowerCase().includes(searchTerm.toLowerCase())
//               ) {
//                 return data;
//               }
//             }
//           })
//           .map((data) => {
//             return (
//               <Card
//                 style={{
//                   width: "75rem",
//                   height: "25rem",
//                   margin: "2rem",
//                   padding: "0rem",
//                 }}
//                 className="PackageCard"
//               >
//                 <Card.Img src={data.image} className="imagePackage" />
//                 <Card.Body className="PackageBody">
//                   <Card.Title className="packageTitle">{data.name}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     {data.PackagesId}
//                   </Card.Subtitle>
//                   <Card.Text>
//                     Enter Package Name = {data.name}
//                     <br />
//                     Travel Destination = {data.destination}
//                     <br />
//                     Members Count = {data.members}
//                     <br />
//                     Hotel Name = {data.hotel}
//                     <br />
//                     Hotel Room Type = {data.roomType}
//                     <br />
//                     Vehicle ={data.vehicle}
//                     <br />
//                     Guide = {data.guide}
//                     <br /> <br />
//                     Price (LK rupees) = {data.price}
//                     <button
//                       type="button"
//                       class="PackageSelect"
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                     >
//                       <Link to={"/PackagePreview/" + data._id}>Select</Link>
//                     </button>
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default Packages;
