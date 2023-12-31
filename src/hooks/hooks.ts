import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../types/types";
import { State } from "../types/types";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
