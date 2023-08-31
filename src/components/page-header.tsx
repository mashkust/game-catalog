import { ReactElement, useState } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { AppRoute, indexSelect } from "../const";
import { useAppSelector } from "../hooks/hooks";

function PageHeader(): ReactElement {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const { games } = useAppSelector(({ DATA }) => DATA);
  const onFormClickHandler = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.stopPropagation();
    setIsSearch(true);
  };

  const onFormBlurHandler = (evt: React.FocusEvent<HTMLDivElement>) => {
    const elementClass = String(evt.relatedTarget?.getAttribute("class"));
    if (
      !(
        elementClass.includes("form-search__select-item") ||
        elementClass.includes("form-search__select-list")
      )
    ) {
      setIsSearch(false);
    } else {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };

  const onInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.currentTarget.value);
  };

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link className="link main-nav__link" to={AppRoute.Page1}>
                Каталог
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="form-search"
          onClick={onFormClickHandler}
          onBlur={onFormBlurHandler}
        >
          <form className="form-search__form" id="form-search">
            <button className="form-search__submit" type="submit" disabled>
              <svg
                className="form-search__icon"
                width="14"
                height="15"
                aria-hidden="true"
              >
                <use href="#icon-search"></use>
              </svg>
              <span className="visually-hidden">Начать поиск</span>
            </button>
            <input
              className="form-search__input"
              id="search"
              type="text"
              autoComplete="off"
              placeholder="что вы ищите?"
              value={text}
              onChange={onInputChangeHandler}
              tabIndex={indexSelect - 1}
            />
            <label className="visually-hidden" htmlFor="search">
              Поиск
            </label>
          </form>
          <ul
            className={`form-search__select-list ${isSearch ? "" : "hidden"}`}
          >
            {games
              .filter((el) =>
                el.title.toLowerCase().includes(text.toLowerCase())
              )
              .map((el) => (
                <li
                  key={el.id}
                  className="form-search__select-item"
                  tabIndex={indexSelect}
                  onKeyPress={(evt) => {
                    if (evt.key === "Enter") {
                      navigate(
                        generatePath(AppRoute.Details, { id: String(el.id) })
                      );
                    }
                  }}
                  onClick={() =>
                    navigate(
                      generatePath(AppRoute.Details, { id: String(el.id) })
                    )
                  }
                >
                  {" "}
                  {el.title}
                </li>
              ))}
          </ul>
          <button
            className="form-search__reset"
            type="reset"
            form="form-search"
            onClick={() => setText("")}
          >
            <svg
              className="form-search__icon"
              width="14"
              height="15"
              aria-hidden="true"
            >
              <use href="#icon-close"></use>
            </svg>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
