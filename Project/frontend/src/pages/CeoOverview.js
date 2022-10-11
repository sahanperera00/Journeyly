import '../styles/sahan/CeoOverview.css'
import { useParams } from 'react-router-dom';

function CeoOverview() {
    var { type } = useParams();
    var topicType = '';

    switch(type) {
        case('flight'): topicType = 'Flights';
        break;
        case('hotel'): topicType = 'Hotels';
        break;
        case('destination'): topicType = 'Destinations';
        break;
        case('taxi'): topicType = 'Taxis';
        break;
        case('package'): topicType = 'Packages';
        break;
        case('user'): topicType = 'Users';
        break;
    }

  return (
    <div className='CeoDashOverviewMainCont'>
        <h1>{topicType} Overview</h1>
        <form className='CeoDashSearch'>
            <input className='ceoSearchbar' type='text' placeholder='Search here' />
            <input className='ceoSearchbttn' type='submit' value='Search'/>
        </form>
        <div className='CeoDashOverviewInnerCont'>
            <div className='CeoDashOverviewInnerContC1'>
                <div className='ceoOverviewTableCont'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">DesId</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Adults</th>
                            <th scope="col">Children</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='CeoDashOverviewInnerContC2'>

            </div>
        </div>
    </div>
  )
}

export default CeoOverview