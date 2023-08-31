import { store } from "../store/index.js";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type GameData = {
  games: Game[];
  game: Game | null;
  isDataLoaded: boolean;
  isDataSending: boolean;
  isSorting: SortType | null;
  selectedTypes: GameGenre | null;
  filteredGamesLength: number | null;
  isDisconnect: boolean;
  isGame: Game | null;
};

interface IMinimumSystemRequirements {
  graphics: string | null;
  memory: string | null;
  os: string | null;
  processor: string | null;
  storage: string | null;
}
interface IScreenshots {
  id: number;
  image: string;
}
export type Game = {
  screenshots: IScreenshots[];
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
  minimum_system_requirements?: IMinimumSystemRequirements;
  description?: string;
  status?: string;
};

export type SortByParamsProps = {
  games: Game[];
  isSorting: SortType;
  isSortInc: boolean;
};

export type Types = Record<string, string>;

export type List = {
  page: string;
  rangeFrom: number;
  rangeTo: number;
};

export type Tab = {
  id: number;
  title: string;
};

export type Rating = {
  value: number;
};

export type GameGenre =
  | "Strategy"
  | "MMORPG"
  | "Shooter"
  | "Battle Royale"
  | "ARPG"
  | "Fighting"
  | "Sports"
  | "MOBA"
  | "Card Game"
  | "Racing"
  | "MMO"
  | "Action RPG";

export type CouponTypes = "light-333" | "medium-444" | "height-555";

export type SortType = "alphabetical" | "release-date";

export type ErrorType = unknown;
