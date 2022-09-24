import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/sahan/DesPreview.css';
import DesResForm from './DesResForm';

function DesPreview() {
  const [attraction, setAttraction] = useState([]);

  const {id} = useParams();

  const getAttraction = async () => {
    await axios.get("http://localhost:8070/destination/"+id)
      .then((res) => {
        setAttraction(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getAttraction() }, [id]);

  return (
    <>
      <div className='desPreviewContainer' style={{ backgroundImage: `url(${attraction.images})` }}>
      <div className='desPreviewBlueDiv' />
      <div className='despreviewTextContainer'>
        <h1 className='descpreviewh1'>{attraction.name}</h1>
        <h2 className='descpreviewh2'>{attraction.shortDesc}</h2>
        <p className='descpreviewp'>{attraction.longDesc}</p><br />
        <a href='#desresform' className='reserveBtn'>Make a Reservation</a>
      </div>
      </div><div className='desResFormContainer'>
        <DesResForm />
      </div>
    </>
  )
}

export default DesPreview;