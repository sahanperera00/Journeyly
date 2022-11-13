import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../styles/sahan/DestinationUpdateForm.css";

function DestinationUpdateForm() {
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [location, setLocation] = useState("");
  const [desLink, setDesLink] = useState("");
  const [extra, setExtra] = useState("");
  const [includes, setIncludes] = useState("");
  const [imageI, setImageI] = useState("");
  const [images, setImages] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const getDestination = () => {
    axios
      .get("http://localhost:8070/destination/" + id)
      .then((res) => {
        setName(res.data.name);
        setShortDesc(res.data.shortDesc);
        setLongDesc(res.data.longDesc);
        setLocation(res.data.location);
        setDesLink(res.data.desLink);
        setExtra(res.data.extra);
        setIncludes(res.data.includes);
        setImages(res.data.images);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // const handleCheck = (e) => {
  //     if (e.target.checked === true) {
  //         return (
  //             <div className="form-group">
  //                 <label className="form-label">Images</label>
  //                 <input type="file" className="form-control" onChange={(e) => { setImageI(e.target.files[0]) }} />
  //             </div>
  //         )
  //     }else {
  //         return(
  //             <div>Hello</div>
  //         )
  //     }
  // };

  useEffect(() => {
    getDestination();
  }, []);
  // useEffect(() => { handleCheck() }, [isChecked]);

  return (
    <div className="DestinationUpdateFormMainCont">
      <h1>Update Travel Destination</h1>
      <div className="DestinationUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const imageRef = ref(
              storage,
              `images/destination/${name + imageI.name}`
            );

            await uploadBytes(imageRef, imageI)
              .then(() => {
                console.log("Uploaded image");
              })
              .catch((err) => {
                console.log(err);
              });

            await getDownloadURL(
              ref(storage, `images/destination/${name + imageI.name}`)
            )
              .then((url) => {
                console.log(url);

                const newDestination = {
                  name,
                  shortDesc,
                  longDesc,
                  location,
                  desLink,
                  extra,
                  includes,
                  // images: url,
                };

                axios
                  .put(
                    "http://localhost:8070/destination/update/" + id,
                    newDestination
                  )
                  .then(() => {
                    alert("Destination updated successfully");
                    navigate("/editorDashboard/editorWebContent/destination");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Short Description</label>
            <textarea
              rows={3}
              type="text"
              className="form-control"
              value={shortDesc}
              onChange={(e) => {
                setShortDesc(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Long Description</label>
            <textarea
              rows={6}
              className="form-control"
              value={longDesc}
              onChange={(e) => {
                setLongDesc(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Destination Link</label>
            <input
              type="text"
              className="form-control"
              value={desLink}
              onChange={(e) => {
                setDesLink(e.target.value);
              }}
              required
            />
          </div>
          {/* <input type="checkbox" id="imageCheck" name="images" value="Images" onChange={handleCheck()} /> Set Image */}
          <br />
          <button type="submit" className="submitbtn">
            Update
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default DestinationUpdateForm;
