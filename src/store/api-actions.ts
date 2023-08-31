import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, Game, State } from "../types/types";
import { loadGame, loadGames } from "./game-data";
import { errorHandle } from "../services/error-handle";
import { APIRoute } from "../const";
import { AxiosInstance } from "axios";

export const fetchGamesAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("data/fetchGames", async (_arg, { dispatch, extra: api }) => {
  const sortParam = window.localStorage.getItem("sortType");
  const filterParam = window.localStorage
    .getItem("types")
    ?.toLowerCase()
    .replaceAll(" ", "-");
  try {
    const { data } = await api.get<Game[]>(APIRoute.Games, {
      params: { category: filterParam, "sort-by": sortParam },
    });
    dispatch(loadGames(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchGameAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("data/fetchGame", async (gameId, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Game>(`${APIRoute.Game}${gameId}`);
    dispatch(loadGame(data));
  } catch (error) {
    errorHandle(error);
  }
});
