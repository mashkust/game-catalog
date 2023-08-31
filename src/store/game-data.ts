import { createSlice } from "@reduxjs/toolkit";
import { GameData, GameGenre, SortType } from "../types/types";
import { NameSpace } from "../const";
import hashHistory from "../hash-history";
import { toast } from "react-toastify";
const initialState: GameData = {
  games: [],
  game: null,
  isDataLoaded: false,
  isDataSending: false,
  isSorting: null,
  selectedTypes: null,
  filteredGamesLength: null,
  isDisconnect: true,
  isGame: null,
};

export const gameData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setIsSorting: (state, action: { payload: SortType }) => {
      state.isSorting = action.payload;
      // if (state.isSortInc === null) {
      //   state.isSortInc = true;
      // }
      const { isSorting } = state;
      // state.games = sortByParams({ games,  isSorting });
      window.localStorage.setItem("sortType", String(isSorting));

      hashHistory.push({
        search: `sortType=${state.isSorting}`,
      });
    },

    loadGames: (state, action) => {
      state.games = action.payload;
      state.isDataLoaded = true;
    },
    loadGame: (state, action) => {
      state.game = action.payload;
    },

    setSelectedTypes: (state, action: { payload: GameGenre | null }) => {
      const { payload } = action;
      if (!payload) {
        state.selectedTypes = null;
      } else {
        state.selectedTypes = payload;
        if (!state.selectedTypes) {
          window.localStorage.removeItem("types");
        }
      }
    },
    setTypesGroup: (state, action: { payload: GameGenre }) => {
      state.selectedTypes = action.payload;
    },
    setIsDisconnect: (state, action) => {
      state.isDisconnect = action.payload;
      if (action.payload) {
        toast.error("Internet disconnected");
        state.isDisconnect = true;
      }
    },

    setIsGame: (state, action) => {
      state.isGame = action.payload;
    },
  },
});

export const {
  loadGames,
  loadGame,
  setIsSorting,
  setSelectedTypes,
  setTypesGroup,
  setIsDisconnect,
  setIsGame,
} = gameData.actions;
