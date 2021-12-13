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
  const result = await axios.delete(
    `${process.env.NEXT_PUBLIC_API}/pins/${pinId}`
  );
  return result.data;
};

const edit = async (pinId, newPin) => {
  const result = await axios.put(
    `${process.env.NEXT_PUBLIC_API}/pins/${pinId}`,
    newPin
  );
  return result.data;
};

const listNearby = async (lng, lat, maxDistance) => {
  const pins = await axios.get(`${process.env.NEXT_PUBLIC_API}/pins/nearby`, {
    params: { lng: lng, lat: lat, maxDistance: maxDistance },
  });
  return pins.data;
};

const get = async (pinId) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/pins/${pinId}`
  );
  return result.data;
};

export default { list, post, remove, edit, listNearby, get };
