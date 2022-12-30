import axios from "axios";
import { buildUrl } from "./utils";

const list = async () => {
  const pins = await axios.get(buildUrl("/pins"));
  return pins.data;
};

const post = async (pin) => {
  const result = await axios.post(buildUrl("/pins"), pin);
  return result.data;
};

const remove = async (pinId) => {
  const result = await axios.delete(buildUrl(`/pins/${pinId}`));
  return result.data;
};

const edit = async (pinId, newPin) => {
  const result = await axios.put(buildUrl(`/pins/${pinId}`), newPin);
  return result.data;
};

const listNearby = async (lng, lat, maxDistance) => {
  const pins = await axios.get(buildUrl(`/pins/nearby`), {
    params: { lng: lng, lat: lat, maxDistance: maxDistance },
  });
  return pins.data;
};

const get = async (pinId) => {
  const result = await axios.get(buildUrl(`/pins/${pinId}`));
  return result.data;
};

export default { list, post, remove, edit, listNearby, get };
