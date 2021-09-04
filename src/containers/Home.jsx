import React from "react";
import "../assets/styles/Home.css";
import logo from "../assets/img/logo.svg";
import footerLogo from "../assets/img/logo-footer.svg";
import "../assets/styles/Tablet.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" />
        <div className="header--title-container">
          <h1>La proxima revolucion en el intercambio de criptomonedas</h1>
          <p>Batatabit te ayuda ahacer de todo parcero</p>
          <a href="#plans" className="header--button">
            Conoce nuestros planes <span></span>
          </a>
        </div>
      </header>
      <main>
        <section className="main-exchange-container">
          <div className="backgroundImg"></div>
          <div className="main-exchange-container--title">
            <h2>Visibilizamos todas las tasas de cambio</h2>
            <p>
              Traemos toda la informacion en tiempo real de las casas de cambio
              y las monedas mas importantes del mundo
            </p>
          </div>
          <section className="main-tables-container">
            <div className="main-currency-table">
              <p className="currency-table--title">Monedas</p>
              <div className="currency-table--container">
                <table>
                  <tbody>
                    <tr>
                      <td className="table__top-left">Bitcoin</td>
                      <td className="table__top-right table__right">
                        $1.96 <span className="down"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ethereum</td>
                      <td className="table__right">
                        $0.07 <span className="up"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ripple</td>
                      <td className="table__right">
                        $2.17 <span className="down"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table__bottom-left">Stellar</td>
                      <td className="table__bottom-right table__right">
                        $4.96 <span className="up"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="currency-table-date">
                <p>
                  <b>Actualizado:</b> 19 Julio 23:45
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="main-product-detail">
          <span className="product-detail---batata-logo"></span>
          <div className="product-detail--title">
            <h2>Creamos un producto sin comparacion</h2>
            <p>Confable y disenado para su uso diario</p>
          </div>
          <section className="product-cards--container">
            <article className="product-detail--card">
              <span className="clock"></span>
              <p className="product--card-title">Tiempo real</p>
              <p className="product--card-body">
                Nuestra API toma informacion minuto a minuto sobre las tasas que
                mas determinan el comportamiento
              </p>
            </article>
          </section>
        </section>
        <section className="bitcoin-img-container">
          <h2>Conocelo hoy</h2>
        </section>
        <section id="plans" className="main-plans-container">
          <div className="plans--title">
            <h2>Escoge el plan que mejor se ajuste a ti.</h2>
            <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
          </div>
          <section className="plans-container--slider">
            <article className="plans-container--card">
              <div className="plan-info-container">
                <h3 className="plan-card--title">Pago anual</h3>
                <p className="plan-card--price">
                  <span>$</span>99
                </p>
                <p className="plan-card--saving">
                  * Ahorras $129 comparado al plan mensual
                </p>
                <button className="plan-card--ca">
                  Escoger este <span></span>
                </button>
              </div>
            </article>
            <article className="plans-container--card">
              <p className="recommended">Recomendado</p>
              <div className="plan-info-container">
                <h3 className="plan-card--title">Pago anual</h3>
                <p className="plan-card--price">
                  <span>$</span>99
                </p>
                <p className="plan-card--saving">
                  * Ahorras $129 comparado al plan mensual
                </p>
                <button className="plan-card--ca">
                  Escoger este <span></span>
                </button>
              </div>
            </article>
            <article className="plans-container--card">
              <div className="plan-info-container">
                <h3 className="plan-card--title">Pago anual</h3>
                <p className="plan-card--price">
                  <span>$</span>99
                </p>
                <p className="plan-card--saving">
                  * Ahorras $129 comparado al plan mensual
                </p>
                <button className="plan-card--ca">
                  Escoger este <span></span>
                </button>
              </div>
            </article>
          </section>
        </section>
      </main>
      <footer>
        <section className="left">
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Crunchbase</a>
            </li>
            <li>
              <a href="#">Hackernews</a>
            </li>
          </ul>
        </section>
        <section className="right">
          <img src={footerLogo} alt="Logo de Batatabit 2020" />
        </section>
      </footer>
    </div>
  );
};

export default Home;
