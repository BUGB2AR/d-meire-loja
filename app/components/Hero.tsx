export default function Hero() {
  return (
    <section className="hero-section uk-flex uk-flex-middle uk-background-cover" 
             style={{ backgroundImage: "url('/img/banner.png')", minHeight: '500px' }}>
      <div className="uk-container uk-width-1-1">
        <div className="uk-width-xlarge@m uk-width-1-1">
          <p style={{ color: 'var(--marrom-texto)', letterSpacing: '2px', fontWeight: 500 }} className="uk-text-uppercase uk-margin-remove-bottom">
            Novos Lançamentos
          </p>
          <h2 className="uk-heading-small uk-margin-small-top" style={{ fontFamily: 'Playfair Display, serif', color: '#333', lineHeight: 1.2 }}>
            Elegância que <br /><i style={{ fontFamily: 'serif' }}>te acompanha</i>
          </h2>
          <p className="uk-text-lead uk-margin-medium-bottom" style={{ fontSize: '1.2rem', color: '#555' }}>
            Calçados e bolsas selecionados para mulheres que valorizam estilo e conforto.
          </p>
          <a href="#" className="uk-button btn-primary uk-button-large" style={{ padding: '0 50px', fontWeight: 'bold', letterSpacing: '1px' }}>
            COMPRE AGORA
          </a>
        </div>
      </div>
    </section>
  );
}