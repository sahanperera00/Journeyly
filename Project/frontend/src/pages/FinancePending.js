import '../styles/sahan/FinancePending.css'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const PER_PAGE = 7;

function FinancePending() {
    var { type } = useParams();
    var topicType = 'topic';
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
                    } else if (data.fee.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                    break;
                case 'user':
                    if (searchTerm == "") {
                        return data;
                    } else if (data.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.email.toLowerCase().includes(searchTerm.toLowerCase())) {
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
            case 'user':
                axios.get('http://localhost:8070/client')
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
            case 'flight':
                cold1 = props.name;
                cold2 = props.airline;
                cold3 = props.businessClass;
                cold4 = props.economyClass;
                cold5 = <Link className='updatebttn' to={"/financeDashboard/financeFlightUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
                cold6hid = 'none';
                break;
            case 'hotel':
                cold1 = props.name;
                cold2 = props.stars;
                cold3hid = 'none';
                cold4 = props.buyingPrice;
                cold5 = props.sellingPrice;
                cold6 = <Link className='updatebttn' to={"/financeDashboard/financeHotelUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
                break;
            case 'destination':
                cold1 = props.name;
                cold2 = props.childTicketBuyingRate;
                cold3 = props.childTicketSellingRate;
                cold4 = props.adultTicketBuyingRate;
                cold5 = props.adultTicketSellingRate;
                cold6 = <Link className='updatebttn' to={"/financeDashboard/destinationUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;
                break;
            case 'taxi':
                cold1 = props.driverName;
                cold2hid = 'none';
                cold3 = props.fee;
                cold4hid = 'none';
                cold5hid = 'none';
                cold6 = <Link className='updatebttn' to={"/financeDashboard/FinanceVehicleUpdateForm/"+props._id}><span className="material-symbols-outlined">edit</span></Link>;;
                break;
            case 'package':
                cold1 = props.name;
                cold2 = props.hotel;
                cold3 = props.destination;
                cold4 = props.vehicle;
                cold5 = props.price;
                cold6hid = 'none';
                break;
            case 'user':
                cold1 = props.firstName;
                cold2 = props.lastName;
                cold3 = props.email;
                cold4 = props.contactNo;
                cold5hid = 'none';
                cold6hid = 'none';
                break;
                
            default:
                break;
        }

    }

    switch (type) {
        case ('flight'):
            topicType = 'Flights';
            col1 = 'Name';
            col2 = 'Airline';
            col3 = 'Business Class(Rs.)';
            col4 = 'Economy Class(Rs.)';
            col5 = 'Update';
            col6hid = 'none';
            break;
        case ('hotel'):
            topicType = 'Hotels';
            col1 = 'Name';
            col2 = 'Star';
            col3hid = 'none';
            col4 = 'Buying Price';
            col5 = 'Selling Price';
            col6 = 'Update';
            break;
        case ('destination'):
            topicType = 'Destinations';
            col1 = 'Name';
            col2 = 'Child (Buying)';
            col3 = 'Child (Selling)';
            col4 = 'Adult (Buying)';
            col5 = 'Adult (Selling)';
            col6 = 'Update';
            break;
        case ('taxi'):
            topicType = 'Taxis';
            col1 = "Driver's Name";
            col2 = 'Fee';
            col3hid = 'none';
            col4hid = 'none';
            col5 = 'Update';
            col6hid = 'none';
            break;
        case ('package'):
            topicType = 'Packages';
            col1 = 'Name';
            col2 = 'Hotel';
            col3 = 'Destination';
            col4 = 'Vehicle';
            col5 = 'Price';
            col6hid = 'none';
            break;
        case ('user'):
            topicType = 'Users';
            col1 = 'First Name';
            col2 = 'Last Name';
            col3 = 'Email';
            col4 = 'Contact Number';
            col5hid = 'none';
            col6hid = 'none';
            break;  

    }

    useEffect(() => { getArray() }, [type]);

    return (
        <div className='FinancePendingMainCont'>
            <h1>{topicType} Overview</h1>
            <div className='FinancePendingSearch'>
                <input className='FinancePendingSearchbar' type='text' placeholder='Search here' onChange={(e) => { setSearchTerm(e.target.value) }} />
            </div>
            <div className='FinancePendingCont'>
                <div className='FinancePendingContC1'>
                    <div className='FinancePendingTableCont'>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ display: col1hid }}>{col1}</th>
                                    <th scope="col" style={{ display: col2hid }}>{col2}</th>
                                    <th scope="col" style={{ display: col3hid }}>{col3}</th>
                                    <th scope="col" style={{ display: col4hid }}>{col4}</th>
                                    <th scope="col" style={{ display: col5hid }}>{col5}</th>
                                    <th scope="col" style={{ display: col6hid }}>{col6}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData}
                            </tbody>
                        </table>
                    </div>
                    <div className='FinancePendingBottomCont'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancePending