import { GameGenre, List, Tab, Types } from "./types/types";

export enum AppRoute {
  Page1 = "/page_1",
  Page2 = "/page_2",
  Page3 = "/page_3",
  Details = "/guitars/details/:id",
  Description = "/guitars/description/:id",
}

export enum APIRoute {
  Games = "games",
  Game = "game?id=",
}

export enum NameSpace {
  data = "DATA",
  comment = "COMMENT",
}

export const GENRES: GameGenre[] = [
  "Strategy",
  "MMORPG",
  "Shooter",
  "Battle Royale",
  "Fighting",
  "Sports",
  "MOBA",
  "Racing",
  "MMO",
  "Action RPG",
];

export const LIST_OF_GAME: List[] = [
  {
    page: "1",
    rangeFrom: 0,
    rangeTo: 150,
  },
  {
    page: "2",
    rangeFrom: 150,
    rangeTo: 300,
  },
  {
    page: "3",
    rangeFrom: 300,
    rangeTo: 450,
  },
];

export const gameTab: Tab[] = [
  {
    id: 1,
    title: "Overview",
  },
  {
    id: 2,
    title: "Details",
  },
];

export const NameOfRequirements: Types = {
  graphics: "Графика",
  memory: "Оперативная память",
  os: "ОС",
  processor: "Процессор",
  storage: "Память",
};

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const indexSelect = 10;
