'use client'; // Necessário para interações do UIkit

export default function Header() {
  return (
    <>
      <div className="top-bar uk-light uk-padding-small">
        <div className="uk-container uk-flex uk-flex-between uk-text-small">
          <div>
            <span className="uk-margin-right">Parcele em até 6x sem juros</span>
            <span>5% OFF NO PIX</span>
          </div>
          <div>
            <span className="uk-margin-right">Atendimento</span>
            <span>(85) 99292-2434</span>
          </div>
        </div>
      </div>

      <header className="uk-background-default uk-padding">
        <div className="uk-container uk-flex uk-flex-between uk-flex-middle">
          <div className="uk-width-1-4">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" data-uk-icon="icon: search"></span>
              <input className="uk-input uk-form-rounded" type="text" placeholder="O que você procura?" />
            </div>
          </div>
          <div className="uk-text-center">
            <h1 style={{ fontFamily: 'serif', margin: 0 }}>DUARTE MEIRE</h1>
            <small className="uk-text-uppercase" style={{ letterSpacing: '2px' }}>Calçados e Acessórios</small>
          </div>
          <div className="uk-width-1-4 uk-text-right">
            <a href="#" className="uk-visible@m uk-margin-small-right" data-uk-icon="user"> Minha conta</a>
            <a href="#" className="uk-hidden@m uk-icon-button uk-margin-small-right" data-uk-icon="user"></a>
            <a href="#" className="uk-visible@m" data-uk-icon="cart"> (0)</a>
            <a href="#" className="uk-hidden@m uk-icon-button" data-uk-icon="cart"></a>
          </div>
        </div>
      </header>

      <div className="uk-text-center uk-padding-small">
        <button className="uk-button uk-button-default" type="button" data-uk-toggle="target: #offcanvas-nav">
          <span data-uk-icon="menu"></span>
        </button>
      </div>

      <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close="true"></button>
          <ul className="uk-nav uk-nav-default">
            <li><a href="#"><span data-uk-icon="star" className="uk-margin-small-right"></span> NOVIDADES</a></li>
            <li><a href="/calcados"><span data-uk-icon="tag" className="uk-margin-small-right"></span> CALÇADOS</a></li>
            <li><a href="#"><span data-uk-icon="bag" className="uk-margin-small-right"></span> BOLSAS</a></li>
            <li><a href="#"><span data-uk-icon="heart" className="uk-margin-small-right"></span> ACESSÓRIOS</a></li>
            <li><a href="#"><span data-uk-icon="credit-card" className="uk-margin-small-right"></span> PROMOÇÕES</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}