import React, { useEffect, useRef } from "react";
import type { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { AppRoute } from "../const";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchGameAction } from "../store/api-actions";
import { Game } from "../types/types";
import LoadingScreen from "./loading-screen";
import PageFooter from "./page-footer";
import PageHeader from "./page-header";
import GameTab from "./game-tab";
import { startScroll } from "../utils";

type GamePageProps = {
  tab: boolean;
};

function GamePage({ tab }: GamePageProps): ReactElement {
  const { game } = useAppSelector(({ DATA }) => DATA);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    const guitarid = Number(params.id);

    if (guitarid) {
      dispatch(fetchGameAction(guitarid));
    }
  }, [dispatch, params]);

  const mainRef = useRef<HTMLElement | null>(null);

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

  if (game) {
    const { title, thumbnail, genre, developer, publisher, release_date } =
      game as Game;

    return (
      <React.Fragment>
        <PageHeader />
        <main ref={mainRef} className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">{title}</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item">
                <Link className="link" to={AppRoute.Page1}>
                  Главная
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="link" to={AppRoute.Page1}>
                  Каталог
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="link">{title}</a>
              </li>
            </ul>
            <div className="product-container">
              <img
                className="product-container__img"
                src={thumbnail}
                srcSet={thumbnail}
                width="90"
                height="235"
                alt={title}
              />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">
                  {title}
                </h2>
                <GameTab tab={tab} game={game} />
              </div>
              <div className="product-container__game-wrapper">
                <p className="product-container__game-info product-container__game-info--title">
                  Жанр: <b>{genre}</b>
                </p>
                <p className="product-container__game-info product-container__game-info--title">
                  Разработчик: <b>{developer}</b>
                </p>
                <p className="product-container__game-info product-container__game-info--title">
                  Издатель: <b>{publisher}</b>
                </p>
                <p className="product-container__game-info product-container__game-info--title">
                  Дата релиза: <b>{release_date}</b>
                </p>
              </div>
            </div>
          </div>
        </main>
        <PageFooter />
      </React.Fragment>
    );
  }
  return <LoadingScreen />;
}

export default GamePage;
