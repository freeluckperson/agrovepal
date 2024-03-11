import { connect } from "mongoose";
const URL = process.env.URL_DB;

export default function connectDB() {
  connect(URL)
    .then(() => console.log("→ Conenected with DB"))
    .catch((error) => console.log(error));
}
