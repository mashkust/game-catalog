import React, { ReactElement } from "react";
import CatalogCard from "./catalog-card";
import PageHeader from "./page-header";
import PageFooter from "./page-footer";
import { AppRoute } from "../const";
import { Link } from "react-router-dom";
import { Game } from "../types/types";
import { startScroll } from "../utils";

type MainProps = {
  games: Game[];
};

function MainPage({ games }: MainProps): ReactElement {
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    }
    if (isEscape) {
      startScroll();
    }
  };

  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-content ">
        <div className="container">
          <h1 className="page-content__title title title--bigger">
            Каталог гитар
          </h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Page1}>
                Главная
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Каталог</a>
            </li>
          </ul>
          <CatalogCard games={games} />
        </div>
      </main>
      <PageFooter />
    </React.Fragment>
  );
}

export default MainPage;
