import { getWhatsAppLink } from "../utils/whatsapp";

export default function ProductCard({ name, price, image, isNew }: any) {
  const waLink = getWhatsAppLink(name, price);

  return (
    <div className="uk-card uk-text-center hover-shrink bg-white uk-box-shadow-small">
      <div className="uk-inline uk-width-1-1">
        {isNew && <span className="uk-badge uk-position-top-left product-badge">NOVO</span>}
        <div className="uk-cover-container product-image-container">
          <img src={`/img/${image}`} alt={name} data-uk-cover="true" />
        </div>
      </div>
      <div className="uk-padding-small">
        <p className="uk-margin-remove uk-text-truncate">{name}</p>
        <p className="uk-text-bold uk-margin-remove">R$ {price.toFixed(2)}</p>
        
        <a href={waLink} target="_blank" rel="noopener noreferrer" 
           className="uk-button uk-button-default uk-button-small uk-width-1-1 uk-margin-small-top"
           style={{ borderColor: '#25D366', color: '#128C7E' }}>
          <span data-uk-icon="whatsapp" className="uk-margin-small-right"></span>
          Pedir no WhatsApp
        </a>
      </div>
    </div>
  );
}