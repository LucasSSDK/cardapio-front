import './Cardapio.css';
import { modal } from '../../mocks/menu';
export default function Cardapio() {
  return (
    <div className="cardapioConteiner">
        <>
      {modal.map((item, index) => (
        <div className="cardapioItem" key={`cardapioItem-${index}`}>
          <div className="cardapioNome">
            {item.name}
            <div className="cardapioImagem">
              <img
                src= {item.url}
                alt="Crema Catalana"
              />
                {item.description}
              
            </div>
          </div>
        </div>
      ))}
    </>
    </div>
  );
};
