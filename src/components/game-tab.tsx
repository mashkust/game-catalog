import { generatePath, Link } from "react-router-dom";
import { Game } from "../types/types";
import Details from "./game-tabs/details";
import Description from "./game-tabs/description";
import { AppRoute } from "../const";
import { ReactElement } from "react";

type GameTabProps = {
  game: Game;
  tab: boolean;
};

function GameTab({ tab, game }: GameTabProps): ReactElement {
  return (
    <div className="tabs">
      {tab && (
        <>
          <Link
            className="button button--medium tabs__button "
            to={generatePath(AppRoute.Details, { id: String(game.id) })}
          >
            Системные требования
          </Link>
          <Link
            className="button button--black-border button--medium tabs__button"
            to={generatePath(AppRoute.Description, { id: String(game.id) })}
          >
            Скриншоты
          </Link>
        </>
      )}
      {!tab && (
        <>
          <Link
            className="button button--medium tabs__button button--black-border "
            to={generatePath(AppRoute.Details, { id: String(game.id) })}
          >
            Системные требования
          </Link>
          <Link
            className="button button--medium tabs__button"
            to={generatePath(AppRoute.Description, { id: String(game.id) })}
          >
            Скриншоты
          </Link>
        </>
      )}
      <div className="tabs__content" id="characteristics">
        {tab && <Details game={game} />}
        {!tab && <Description game={game} />}
      </div>
    </div>
  );
}

export default GameTab;
