import { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../const";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setIsSorting, setTypesGroup } from "../store/game-data";
import { GameGenre, SortType } from "../types/types";

function Pagination(): ReactElement {
  const gamesLenght = useAppSelector(({ DATA }) => DATA.games.length);
  const { isSorting, selectedTypes } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();
  const sortType = localStorage.getItem("sortType");

  const types = localStorage.getItem("types");
  useEffect(() => {
    if (sortType) {
      if (!isSorting) {
        dispatch(setIsSorting(sortType as SortType));
      }
    }

    if (selectedTypes && types) {
      dispatch(setTypesGroup(types as GameGenre));
    }
  }, []);

  return (
    <div
      className="pagination page-content__pagination"
      data-testid="pagination"
    >
      <ul className="pagination__list">
        {document.location.hash.includes(AppRoute.Page2) ? (
          <>
            <li className="pagination__page pagination__page--prev" id="prev">
              <Link className="link pagination__page-link" to={AppRoute.Page1}>
                Назад
              </Link>
            </li>
            {}
            <li className="pagination__page ">
              <Link to={AppRoute.Page1} className="link pagination__page-link">
                1
              </Link>
            </li>
            <li className="pagination__page">
              <Link
                to={AppRoute.Page2}
                className="link pagination__page-link pagination__page--active"
                type="button"
              >
                2
              </Link>
            </li>
            {gamesLenght && gamesLenght > 300 ? (
              <li className="pagination__page">
                <Link
                  to={AppRoute.Page3}
                  className="link pagination__page-link"
                >
                  3
                </Link>
              </li>
            ) : (
              ""
            )}
            {gamesLenght && gamesLenght > 300 ? (
              <li className="pagination__page pagination__page--next" id="next">
                <Link
                  to={AppRoute.Page3}
                  className="link pagination__page-link"
                >
                  Далее
                </Link>
              </li>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {document.location.hash.includes(AppRoute.Page1) ? (
          <>
            <li className="pagination__page ">
              <Link
                to={AppRoute.Page1}
                className="link pagination__page-link pagination__page--active"
              >
                1
              </Link>
            </li>
            {gamesLenght && gamesLenght > 150 ? (
              <li className="pagination__page">
                <Link
                  to={AppRoute.Page2}
                  className="link pagination__page-link "
                  type="button"
                >
                  2
                </Link>
              </li>
            ) : (
              ""
            )}
            {gamesLenght && gamesLenght > 300 ? (
              <li className="pagination__page">
                <Link
                  to={AppRoute.Page3}
                  className="link pagination__page-link"
                >
                  3
                </Link>
              </li>
            ) : (
              ""
            )}
            {gamesLenght && gamesLenght > 150 ? (
              <li className="pagination__page pagination__page--next" id="next">
                <Link
                  to={AppRoute.Page2}
                  className="link pagination__page-link"
                >
                  Далее
                </Link>
              </li>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {document.location.hash.includes(AppRoute.Page3) ? (
          <>
            <li className="pagination__page pagination__page--prev" id="prev">
              <Link className="link pagination__page-link" to={AppRoute.Page2}>
                Назад
              </Link>
            </li>
            <li className="pagination__page ">
              <Link to={AppRoute.Page1} className="link pagination__page-link">
                1
              </Link>
            </li>
            <li className="pagination__page">
              <Link
                to={AppRoute.Page2}
                className="link pagination__page-link "
                type="button"
              >
                2
              </Link>
            </li>
            <li className="pagination__page">
              <Link
                to={AppRoute.Page3}
                className="link pagination__page-link pagination__page--active"
              >
                3
              </Link>
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Pagination;
