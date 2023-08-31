import { useNavigate } from "react-router-dom";
import { AppRoute, GENRES } from "../const";
import hashHistory from "../hash-history";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setSelectedTypes } from "../store/game-data";
import { ReactElement } from "react";

function FilterCard(): ReactElement {
  const { selectedTypes } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Категории</legend>
        {GENRES.map((genre) => {
          return (
            <div className="form-checkbox catalog-filter__block-item">
              <input
                className="visually-hidden"
                type="radio"
                id={genre}
                name={genre}
                checked={!!(selectedTypes && selectedTypes === genre)}
                onChange={() => {
                  dispatch(setSelectedTypes(genre));
                  navigate({
                    pathname: AppRoute.Page1,
                    search: hashHistory.location.search,
                  });
                }}
              />
              <label htmlFor={genre}>{genre}</label>
            </div>
          );
        })}
      </fieldset>
      <button
        className="catalog-filter__reset-btn button button--black-border button--medium"
        type="reset"
        onClick={() => {
          navigate({
            pathname: AppRoute.Page1,
            search: hashHistory.location.search,
          });
          dispatch(setSelectedTypes(null));
        }}
      >
        Очистить
      </button>
    </form>
  );
}

export default FilterCard;
