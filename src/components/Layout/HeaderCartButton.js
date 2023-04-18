import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const [btnHighlight, setBtnHighlight] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;

    useEffect(() => {
        if(cartCtx.items.length === 0) {
            return;
        }
        setBtnHighlight(true);

        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;