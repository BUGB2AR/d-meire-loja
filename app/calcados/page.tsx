import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";


export default function CalcadosPage() {
  const calcados = PRODUCTS.filter(p => p.category === 'calcados');

  return (
    <>
      <Header />
      <section className="uk-section uk-background-muted" style={{ minHeight: '100vh' }}>
        <div className="uk-container">
          <ul className="uk-breadcrumb">
            <li><a href="/">Home</a></li>
            <li><span>Calçados</span></li>
          </ul>

          <div className="uk-flex uk-flex-between uk-flex-middle uk-margin-large-bottom">
            <h2 className="uk-margin-remove" style={{ fontFamily: 'serif' }}>Calçados</h2>
            <span className="uk-text-meta">{calcados.length} produtos encontrados</span>
          </div>

          <div className="uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2" data-uk-grid>
            {calcados.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}