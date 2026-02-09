import { useCart } from "../context/CartContext";

//Components
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

//Style
import styles from "./CheckoutPage.module.css";

//Images
import empty from "../assets/empty.png";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <p>The shopping cart is empty!</p>
        <img src={empty} alt="empty image" />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((Product) => (
          <BasketCard
            key={Product.id}
            data={Product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
