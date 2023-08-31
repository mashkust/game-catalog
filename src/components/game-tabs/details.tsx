import { ReactElement } from "react";
import { Game } from "../../types/types";
import { NameOfRequirements } from "../../const";

type DetailsTabProps = {
  game: Game;
};

function Details({ game }: DetailsTabProps): ReactElement {
  return (
    <table className="tabs__table">
      <tbody>
        {game.minimum_system_requirements &&
          Object.keys(game.minimum_system_requirements).map((el) => {
            return (
              <tr className="tabs__table-row">
                <td className="tabs__title">{NameOfRequirements[el]}:</td>
                <td className="tabs__value">
                  {game.minimum_system_requirements &&
                  game.minimum_system_requirements[el]
                    ? game.minimum_system_requirements[el]
                    : "-"}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Details;
