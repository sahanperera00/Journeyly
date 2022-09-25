import '../styles/nash/ClientDashSidebar.css';

function ClientDashSidebar() {
  return (
    <div className="CDashSidebarContainer">
        <div className='CDSLogoCont'>
            <center>
                <img src={'https://firebasestorage.googleapis.com/v0/b/journeyly-7f164.appspot.com/o/images%2Fothers%2FJourneyly-color.webp?alt=media&token=a3f56e3b-585b-4a32-b1ab-418c5df3f38c'} alt='logo' />
            </center>
        </div>
        <div className='CDSTabCont'><span className="material-symbols-outlined">person</span><p>User Profile</p></div>
        <div className='CDSTabCont'><span className="material-symbols-outlined">sell</span><p>Bookings</p></div>
        <div className='CDSTabCont'><span className="material-symbols-outlined">chat</span><p>Feedbacks</p></div>
        <div className='CDSTabCont'><span className="material-symbols-outlined">payment</span><p>Payments</p></div>
    </div>
  )
}

export default ClientDashSidebar