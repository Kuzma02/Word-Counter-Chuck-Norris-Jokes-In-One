import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/pagenotfound.jpg";
import "../styles/PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="pagenotfound-main">
      <h1>Oops! Page not found.</h1>
      <img src={PageNotFoundImg} alt="page not found 404 error" />
      <Link to="/">Go back to word counter</Link>
    </div>
  )
}
