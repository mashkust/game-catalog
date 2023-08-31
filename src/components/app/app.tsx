import { Route, Routes } from "react-router-dom";
import { AppRoute, LIST_OF_GAME } from "../../const";
import { useAppSelector } from "../../hooks/hooks";
import GamePage from "../game-page";
import MainPage from "../main-page";
import NotFoundPage from "../notfound-page";
import LoadingScreen from "../loading-screen";
import { ReactElement, useEffect } from "react";
import hashHistory from "../../hash-history";
import { fetchGamesAction } from "../../store/api-actions";
import { store } from "../../store";

function App(): ReactElement {
  const games = useAppSelector(({ DATA }) => DATA.games);
  const isDataLoaded = useAppSelector(({ DATA }) => DATA.isDataLoaded);
  const isSorting = useAppSelector(({ DATA }) => DATA.isSorting);
  const selectedTypes = useAppSelector(({ DATA }) => DATA.selectedTypes);

  useEffect(() => {
    let filterSearch = "?filters=false";

    if (selectedTypes) {
      filterSearch += `?types=${selectedTypes}`;
      window.localStorage.setItem("types", String(selectedTypes));
    } else {
      window.localStorage.removeItem("types");
    }

    const startIndex = hashHistory.location.search.indexOf("?filters");
    hashHistory.push({
      search:
        (startIndex !== -1
          ? hashHistory.location.search.slice(0, startIndex)
          : hashHistory.location.search) + filterSearch,
    });
  }, [selectedTypes, games]);

  useEffect(() => {
    store.dispatch(fetchGamesAction());
  }, [selectedTypes, isSorting]);

  useEffect(() => {
    hashHistory.push(AppRoute.Page1);
  }, []);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }
  return (
    <Routes>
      <Route
        path={AppRoute.Page1}
        element={
          <MainPage
            games={games.slice(
              LIST_OF_GAME[0].rangeFrom,
              LIST_OF_GAME[0].rangeTo
            )}
          />
        }
      />
      <Route
        path={AppRoute.Page2}
        element={
          <MainPage
            games={games.slice(
              LIST_OF_GAME[1].rangeFrom,
              LIST_OF_GAME[1].rangeTo
            )}
          />
        }
      />
      <Route
        path={AppRoute.Page3}
        element={
          <MainPage
            games={games.slice(
              LIST_OF_GAME[2].rangeFrom,
              LIST_OF_GAME[2].rangeTo
            )}
          />
        }
      />
      <Route path={AppRoute.Details} element={<GamePage tab />} />
      <Route path={AppRoute.Description} element={<GamePage tab={false} />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
