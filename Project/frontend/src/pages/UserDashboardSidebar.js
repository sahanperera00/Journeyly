import React from 'react'
import '../styles/nash/UserDashboardSidebar.css'

function UserDashboardSidebar() {
  return (
    <div className='userdashsidebarcontainer'>
        <div className="sidebarlist">
          <center>
            <button type="button" className='sidebarbtn'  >
            <img src="https://img.icons8.com/emoji/48/000000/bust-in-silhouette.png"/><br/>User profile</button>
            <button type="button" className='sidebarbtn'>
            <img src="https://img.icons8.com/emoji/48/000000/label-emoji.png"/><br/>Bookings</button>
            <button type="button" className='sidebarbtn'>
            <img src="https://img.icons8.com/emoji/48/000000/speech-balloon.png"/><br/>Feedback</button>
            <button type="button" className='sidebarbtn'>
            <img src="https://img.icons8.com/emoji/48/000000/credit-card-emoji.png"/><br/>Payment Details</button>
          </center>
        </div>


    </div>
  )
}

export default UserDashboardSidebar