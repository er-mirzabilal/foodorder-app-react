import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Baryani",
    description: "Sindh specialty!",
    price: 500,
  },
  {
    id: "m2",
    name: "Chicken Tikka",
    description: "Punjab specialty!",
    price: 400,
  },
  {
    id: "m3",
    name: "Kabuli Pulao",
    description: "Peshawar specialty! ",
    price: 800,
  },
  {
    id: "m4",
    name: "Sajji",
    description: "Balochistan specialty!  ",
    price: 1000,
  },
];


const AvailableMeals = () => {
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

export default AvailableMeals;
