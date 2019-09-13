import axios from "../axios";

const getFoods = () => {
  return axios.get("/foods.json");
};

const addBill = (token, data) => {
  return axios.post(`/bill.json?auth=${token}`, data);
};

export default {
  getFoods,
  addBill
};
