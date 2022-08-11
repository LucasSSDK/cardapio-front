import React, { useState } from 'react';
import './Cardapio.css';
import { modal } from '../../mocks/menu';
import Botao from 'components/button/index';

export default function Cardapio() {
  const [pratoSelecionada, setpratoSelecionada] = useState({});

  const adicionarItem = (pratoIndex) => {
    const prato = {
      [pratoIndex]: Number(pratoSelecionada[pratoIndex] || 0) + 1,
    };
    setpratoSelecionada({ ...pratoSelecionada, ...prato });
  };

  const removerItem = (pratoIndex) => {
    const prato = { [pratoIndex]: Number(pratoSelecionada[pratoIndex] || 0) -1 }
    setpratoSelecionada({...pratoSelecionada, ...prato});
}

  const badgeCounter = (canRender, index) =>
	Boolean(canRender) && <span className='item__badge'>{pratoSelecionada[index] || 0} </span>;

  const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Acoes__remover" onClick={() => removerItem(index)}>remover</button>)


  return (
    <div className="cardapioConteiner">
      <>
        {modal.map((item, index) => (
          <div className="cardapioItem" key={`cardapioItem-${index}`}>

              {badgeCounter(pratoSelecionada[index], index)}
            <div className="cardapioName">
              {item.name}
              <div className="cardapioImagem">
                <img src={item.url} alt={item.name} />
                {/* <div className="cardapioDescription">{item.description}</div> */}
                <div>
                  <button className="adicionar" onClick={() => adicionarItem
                    (index)}>Adicionar </button>

                      {removeButton(pratoSelecionada[index], index)}

                
                  <button className="botaoModal">Conheça este prato</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
