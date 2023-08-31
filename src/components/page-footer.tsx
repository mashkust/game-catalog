import { ReactElement } from "react";

function PageFooter(): ReactElement {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <section className="footer__nav-section footer__nav-section--info">
          <h2 className="footer__nav-title">О нас</h2>
          <p className="footer__nav-content footer__nav-content--font-secondary">
            Каталог игр
            <br />
            <br />
            Иконки:&nbsp;
            <a
              href="https://www.flaticon.com/ru/free-icons/-"
              title="Интернет вещей иконки"
              style={{ color: "white" }}
            >
              Интернет вещей иконки от I Wayan Wika - Flaticon
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
}

export default PageFooter;
