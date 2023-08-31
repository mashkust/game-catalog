import GameCard from "./game-card";
import { Game } from "../types/types";
import Pagination from "./pagination";
import FilterCard from "./filter-card";
import { setIsDisconnect, setIsSorting } from "../store/game-data";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ReactElement, useEffect } from "react";

type CatalogCardProps = {
  games: Game[];
};

function CatalogCard({ games }: CatalogCardProps): ReactElement {
  const { isSorting } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();

  const onSortAlphabeticalHandler = () => {
    dispatch(setIsSorting("alphabetical"));
  };

  const onSortDateHandler = () => {
    dispatch(setIsSorting("release-date"));
  };

  useEffect(() => {
    dispatch(setIsDisconnect(!navigator.onLine));
  }, []);

  return (
    <div className="catalog">
      <FilterCard />
      <div className="catalog-sort">
        <h2 className="catalog-sort__title">Сортировать:</h2>
        <div className="catalog-sort__type">
          <button
            className={`catalog-sort__type-button ${
              isSorting === "alphabetical"
                ? "catalog-sort__type-button--active"
                : ""
            }`}
            aria-label="по названию"
            onClick={onSortAlphabeticalHandler}
          >
            по названию
          </button>
          <button
            className={`catalog-sort__type-button ${
              isSorting === "release-date"
                ? "catalog-sort__type-button--active"
                : ""
            }`}
            aria-label="по дате релиза"
            onClick={onSortDateHandler}
          >
            по дате релиза
          </button>
        </div>
      </div>
      <div className="cards catalog__cards">
        {games.map((game: Game) => (
          <GameCard {...{ game }} key={game.id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default CatalogCard;
