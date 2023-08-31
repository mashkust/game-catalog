import { Link } from "react-router-dom";
import { AppRoute } from "../const";
import { ReactElement } from "react";

function NotFoundPage(): ReactElement {
  return (
    <>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>
        <Link to={AppRoute.Page1}>Главная страница</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
