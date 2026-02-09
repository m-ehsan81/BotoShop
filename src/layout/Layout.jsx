import { Link } from "react-router-dom";

//Icons
import { PiShoppingCartSimpleBold } from "react-icons/pi";

//Style
import styles from "./Layout.module.css";

//Context
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Shayan with 🤍</p>
      </footer>
    </>
  );
}

export default Layout;
