import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
};

// mongodb environment variables
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT, NODE_ENV, MONGO_URI } =
  process.env;

const dbConnectionURIs = {
  LOCAL_DB_URL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  REMOTE_DB_URL: process.env.MONGO_URI, //atlas url
};

const URI =
  NODE_ENV === "production"
    ? dbConnectionURIs.REMOTE_DB_URL
    : dbConnectionURIs.LOCAL_DB_URL;

mongoose.connect(URI, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb Connection Error:" + URI));
db.once("open", () => {
  // we're connected !
  console.log("Mongodb Connection Successful");
});

export default db;
