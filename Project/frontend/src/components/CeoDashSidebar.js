import "../styles/sahan/CeoDashSidebar.css";
import { Link } from "react-router-dom";

function CeoDashSidebar() {
  return (
    <div className="CeoDashSidebarMainCont">
      <div className="CeoDSLogoCont">
        <center>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-color.webp?alt=media&token=46432dde-c8e0-43e9-bc91-77b8a98e3f76"
            }
            alt="logo"
          />
        </center>
      </div>
      {/* <hr className='Ceohrline' /> */}
      <Link className="CeoSTabContS" to={`/ceoDashboard/ceoRevenue`}>
        <span className="material-symbols-outlined">dashboard</span>
        <p>Dashboard</p>
      </Link>
      <p className="CeoSTabContL">
        <span className="material-symbols-outlined">analytics</span>
        <p>Overview</p>
      </p>
      <p className="CeoSTabContSub">
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/flight`}>
          <span className="material-symbols-outlined">flight</span>
          <p>Flights</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/hotel`}>
          <span className="material-symbols-outlined">hotel</span>
          <p>Hotels</p>
        </Link>
        <Link
          className="CeoSTabContS"
          to={`/ceoDashboard/ceoOverview/destination`}
        >
          <span className="material-symbols-outlined">pin_drop</span>
          <p>Destinations</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/taxi`}>
          <span className="material-symbols-outlined">local_taxi</span>
          <p>Taxis</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/package`}>
          <span className="material-symbols-outlined">package</span>
          <p>Packages</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/user`}>
          <span className="material-symbols-outlined">person</span>
          <p>Users</p>
        </Link>
      </p>
    </div>
  );
}

export default CeoDashSidebar;
