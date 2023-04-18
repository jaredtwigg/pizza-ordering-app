import HeaderCartButton from "./HeaderCartButton";
import pizzaImage from "../../assests/pizza.jpeg";
import classes from "../Layout/Header.module.css";

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1>Asteroid Pizza</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={pizzaImage} alt="gooey pizza"/>
        </div>
    </>
};

export default Header;