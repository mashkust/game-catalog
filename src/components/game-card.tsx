import React, { ReactElement } from "react";
import { generatePath, Link } from "react-router-dom";
import { AppRoute } from "../const";
import type { Game } from "../types/types";
import { parseDate } from "../utils";

type GameCardProps = {
  game: Game;
};

function GameCard({ game }: GameCardProps): ReactElement {
  const { title, genre, thumbnail, id, publisher, release_date } = game;

  return (
    <div className="product-card">
      <div className="product-card__info">
        <p className="product-card__title">{publisher}</p>
        <p className="product-card__title">{parseDate(release_date)}</p>
      </div>
      <img
        src={thumbnail}
        srcSet={thumbnail}
        width="75"
        height="190"
        alt={title}
      />
      <div className="product-card__info">
        <p className="product-card__title" style={{ fontWeight: "600" }}>
          {title}
        </p>
        <p className="product-card__title">{genre}</p>
      </div>
      <div className="product-card__buttons">
        <Link
          to={generatePath(AppRoute.Details, { id: String(id) })}
          className="button button--mini"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
