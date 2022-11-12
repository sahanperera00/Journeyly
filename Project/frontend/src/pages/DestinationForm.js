import { useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../styles/sahan/DestinationForm.css";

function DestinationForm() {
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [location, setLocation] = useState("");
  const [desLink, setDesLink] = useState("");
  const [extra, setExtra] = useState("");
  const [includes, setIncludes] = useState("");
  const [imageI, setImageI] = useState("");

  const navigate = useNavigate();

  return (
    <div className="DestinationFormMainCont">
      <h1>Add Travel Destination</h1>
      <div className="DestinationFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const imageRef = ref(
              storage,
              `images/destination/${name + imageI.name}`
            );

            await uploadBytes(imageRef, imageI)
              .then(() => {
                console.log("Uploaded images");
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
                  images: url,
                };

                axios
                  .post(
                    "http://localhost:8070/destination/create",
                    newDestination
                  )
                  .then(() => {
                    alert("Destination added successfully");
                    navigate("/editorDashboard/editorWebContent/destination");
                  })
                  .catch((err) => {
                    alert("Error adding destination");
                    console.log(err);
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
              type="text"
              className="form-control"
              onChange={(e) => {
                setLongDesc(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location Link</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setDesLink(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Images</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setImageI(e.target.files[0]);
              }}
              required
            />
          </div>
          <br />
          <button type="submit" className="submitbtn">
            Add Destination
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default DestinationForm;
