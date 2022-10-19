import classes from "./AvailbleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "finst fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "schnitzel",
    description: "A german specail",
    price: 15.35,
  },
  {
    id: "m3",
    name: "barbecane burger",
    description: "American raw meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green bowt",
    description: "healthy...and greet",
    price: 18.99,
  }
];
const AvailbleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailbleMeals;
