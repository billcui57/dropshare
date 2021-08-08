import axios from "axios";

const list = async () => {
  const pins = await axios.get(`${process.env.NEXT_PUBLIC_API}/pins`);
  return pins.data;
};

const post = async (pin) => {
  const result = await axios.post(`${process.env.NEXT_PUBLIC_API}/pins`, pin);
  return result.data;
};

const remove = async (pinId) => {
  const result = await axios.delete(`${process.env.NEXT_PUBLIC_API}/pins`, {
    params: {
      id: pinId,
    },
  });

  return result.data;
};

export default { list, post, remove };
