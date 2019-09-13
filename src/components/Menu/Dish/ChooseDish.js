import React, { useState, useEffect } from "react";
import DetailDish from "./DetailDish";

import Controller from "../../../Controlller/Controller";

import Spiner from "../../UI/spinner/Spiner";

export const ChooseDish = props => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [food, setFood] = useState(null);

  const paramId = props.match.params.id;

  useEffect(() => {
    loadData();
  }, []);


  const loadData = async () => {
    try {
      setLoading(true);
      const res = await Controller.getFoods();
      let index = null;
      for (var i in res.data) {
        index = i;
      }
      const foods = res.data[index];
      const item = foods.filter(value => value.id === paramId)[0];

      if (item) {
        setFood(item);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErr(true);
    }
  };

 
  var sumary = "";
  if (loading) {
    sumary = (
      <>
        <h2>...Loading</h2>
        <Spiner />
      </>
    );
  }
  if (loading && err) {
    sumary = <h1>Something were Wrong !</h1>;
  }
  if (food !== null) {
    sumary = <DetailDish value={food} {...props} />;
  }
  return sumary;
};

export default ChooseDish;
