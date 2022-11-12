import mongoose from "mongoose";

const vehicle = mongoose.Schema;

const newVehicle = new vehicle({
  type: {
    type: String,
  },

  vehicleType: {
    type: String,
  },

  driverName: {
    type: String,
  },

  ownerName: {
    type: String,
  },

  email: {
    type: String,
  },
  phoneNo: {
    type: String,
  },

  fee: {
    type: Number,
  },

  image: {
    type: String,
  },
  seats: {
    type: String,
  },

  transmission: {
    type: String,
  },
  pickup: {
    type: String,
  },
});

const vehicles = mongoose.model("vehicle", newVehicle);

export default vehicles;
