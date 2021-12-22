import axios from "axios";

const post = async (rating) => {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_API}/ratings`,
    rating
  );
  return result.data;
};

export default { post };
