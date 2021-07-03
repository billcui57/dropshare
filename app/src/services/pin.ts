import axios from "axios";

const list = async () => {
  const pins = await axios.get(`${process.env.API}/pins`);
  return pins.data;
};

const post = async (pin) => {
  const result = await axios.post(`${process.env.API}/pins`, pin);
  return result.data;
};

export default { list, post };
