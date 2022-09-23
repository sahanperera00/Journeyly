import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    <div style={{
      backgroundImage:`url(${attraction.images})`, 
      height:"100vh", 
      backgroundPosition:"center", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      }}>

    <div style={{
      width:"100%", 
      height:"100%",
      position: "absolute",
      backdropFilter: "blur(8px)",
      }}/>

    <h1 style={{
        color:"white",
        fontSize:"100px",
        marginLeft:"10%",
        marginTop:"10%",
        position: "absolute",
        zIndex: "2",
      }}>
    {attraction.name}
    </h1>

    </div>
  )
}

export default DesPreview;