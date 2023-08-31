import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { gameData } from "./game-data";

export const rootReducer = combineReducers({
  [NameSpace.data]: gameData.reducer,
});
