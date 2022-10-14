import '../styles/sahan/EditorDashSidebar.css'
import { Link } from 'react-router-dom';

function EditorDashSidebar() {
  return (
    <div className='EditorDashSidebarMainCont'>
      <div className='EditorDSLogoCont'>
        <center>
          <img src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly_Slogan-color.webp?alt=media&token=46432dde-c8e0-43e9-bc91-77b8a98e3f76'} alt='logo' />
        </center>
      </div>
      <Link className='EditorSTabContS' to={`/editorDashboard`}>
        <span className="material-symbols-outlined">dashboard</span><p>Dashboard</p>
      </Link>
      <p className='EditorSTabContL'>
        <span className="material-symbols-outlined">analytics</span><p>Web Content</p>
      </p>
      <p className='EditorSTabContSub'>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/flight`}>
          <span className="material-symbols-outlined">flight</span><p>Flights</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/hotel`}>
          <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/destination`}>
          <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/taxi`}>
          <span className="material-symbols-outlined">local_taxi</span><p>Taxis</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/package`}>
          <span className="material-symbols-outlined">package</span><p>Packages</p>
        </Link>
      </p>
    </div>
  )
}

export default EditorDashSidebar