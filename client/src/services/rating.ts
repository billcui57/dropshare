import axios from "axios";
import { buildUrl } from "./utils";

const post = async (rating) => {

  const result = await axios.post(
    buildUrl("/ratings"),
    rating
  );
  return result.data;
};

export default { post };
