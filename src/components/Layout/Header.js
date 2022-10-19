import { Fragment } from "react";
import img1 from "../../assets/img1.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={img1} alt="The Moon!" />
      </div>
    </Fragment>
  );
};
export default Header;
