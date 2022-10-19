import React from "react";
import classes from './MealsSummary.module.css';
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food, Delivred To You</h1>
      <p>
        choose your favorite meal from our broad selection of availble meals and
        enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cookes with high-quality inredients, just-in-time and 
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealsSummary;
