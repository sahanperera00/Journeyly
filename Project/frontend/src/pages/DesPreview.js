import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/sahan/DesPreview.css';

function DesPreview() {
  const [attraction, setAttraction] = useState([]);

  const {id} = useParams();

  const getAttraction = () => {
    axios.get("http://localhost:8070/destination/"+id)
      .then((res) => {
        setAttraction(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getAttraction() }, [id]);

  return (
    <div className='desPreviewContainer' style={{ backgroundImage:`url(${attraction.images})` }}>
      <div className='desPreviewBlueDiv' />
      <h1 className='descpreviewh1'>{attraction.name}</h1>
      <h2 className='descpreviewh2'>{attraction.shortDesc}</h2>

    </div>
  )
}

export default DesPreview;