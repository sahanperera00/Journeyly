import mongoose from "mongoose";

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: {
    type: String,
  },
  shortDesc: {
    type: String,
  },
  longDesc: {
    type: String,
  },
  location: {
    type: String,
  },
  desLink: {
    type: String,
  },
  extra: {
    type: [String],
  },
  includes: {
    type: [String],
  },
  images: {
    type: String,
  },
  adultTicketBuyingRate: {
    type: Number,
  },
  childTicketBuyingRate: {
    type: Number,
  },
  adultTicketSellingRate: {
    type: Number,
  },
  childTicketSellingRate: {
    type: Number,
  },
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
