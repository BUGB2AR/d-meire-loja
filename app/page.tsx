import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

export default function HomePage() {
  const products = [
    { name: 'Bolsa Tote Clássica Caramelo', price: 129.90, image: 'bolsa01.jpeg', isNew: true },
    { name: 'Bolsa Feminina Elegance', price: 129.90, image: 'bolsa02.jpeg', isNew: true },
    { name: 'Sandália Verão Confort', price: 129.90, image: 'sandalia.jpeg', isNew: true },
    { name: 'Sandália Salto Médio', price: 129.90, image: 'sandalia02.jpeg', isNew: true },
  ];

  return (
    <>
      <Header />
      <Hero />

      {/* BARRA DE BENEFÍCIOS */}
      <div className="uk-section uk-section-xsmall uk-background-default">
        <div className="uk-container">
          <div className="uk-grid-divider uk-child-width-1-3@m uk-text-center" data-uk-grid>
            <div><span data-uk-icon="icon: bolt; ratio: 1.2" className="uk-margin-small-right"></span> ENTREGA FÁCIL</div>
            <div><span data-uk-icon="icon: credit-card; ratio: 1.2" className="uk-margin-small-right"></span> PARCELE EM ATÉ 6X</div>
            <div><span data-uk-icon="icon: lock; ratio: 1.2" className="uk-margin-small-right"></span> COMPRA SEGURA</div>
          </div>
        </div>
      </div>

      {/* GRID DE PRODUTOS */}
      <section className="uk-section">
        <div className="uk-container">
          <h3 className="uk-text-center uk-text-uppercase uk-margin-large-bottom">Destaques</h3>
          <div className="uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2" data-uk-grid>
            {products.map((p, index) => (
              <ProductCard key={index} {...p} />
            ))}
          </div>
          <div className="uk-text-center uk-margin-large-top">
            <button className="uk-button btn-primary">VER TODOS</button>
          </div>
        </div>
      </section>
    </>
  );
}