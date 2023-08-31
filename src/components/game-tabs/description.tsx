import { ReactElement } from "react";
import { Game } from "../../types/types";
import Carousel from "./carousel/carousel";

type DescriptionTabProps = {
  game: Game;
};

function Description({ game }: DescriptionTabProps): ReactElement {
  return <Carousel {...{ game }} />;
}

export default Description;
