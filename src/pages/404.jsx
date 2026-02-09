import { Link } from "react-router-dom";

import errorImg from "../assets/notFound.png";

import styles from "./404.module.css";

import { FaArrowLeft } from "react-icons/fa";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <img src={errorImg} alt="Not Found Image" />

      <Link to="/products">
        <div>
          <FaArrowLeft />
          <span>Back to shop</span>
        </div>
      </Link>
    </div>
  );
}

export default PageNotFound;
